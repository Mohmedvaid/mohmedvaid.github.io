import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Loader from "../Loader";
import DetectedFingers from "./DetectedFingers";
import getExtendedFingers from "./getExtendedFingers";
import getFingerGestureGif from "./getFingerGestureGif";

const styles = {
  root: {
    padding: "20px",
    width: "100%",
  },
  video: {
    transform: "scaleX(-1)",
    width: "100%",
    maxHeight: "400px",
    margin: "20px",
  },
  noticeWrapper: {
    textAlign: "center",
    marginTop: 5,
  },
};

const HandGestureDetection = () => {
  const videoRef = useRef();
  const streamRef = useRef();
  const detectionTimeoutRef = useRef();

  const [model, setModel] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedFingers, setDetectedFingers] = useState([]);
  const [currentGifUrl, setCurrentGifUrl] = useState(null);

  const detectedFingersMemo = useMemo(
    () => detectedFingers,
    [detectedFingers.join(",")]
  );
  const newGifEmbedUrl = useMemo(
    () => getFingerGestureGif(detectedFingersMemo),
    [detectedFingersMemo]
  );

  useEffect(() => {
    if (newGifEmbedUrl !== currentGifUrl) {
      setCurrentGifUrl(newGifEmbedUrl);
    }
  }, [newGifEmbedUrl, currentGifUrl]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsLoading(true);
        const loadedModel = await handpose.load();
        setModel(loadedModel);
      } catch (error) {
        console.error("Failed to load model: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadModel();
  }, []);

  const startVideo = useCallback(async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
        setIsDetectionStarted(true);
        setPermissionDenied(false);
      };
    } catch (error) {
      console.error("Error accessing the webcam: ", error);
      setPermissionDenied(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const stopVideo = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    clearTimeout(detectionTimeoutRef.current);
    setIsDetectionStarted(false);
    setDetectedFingers([]);
  }, []);

  const detect = useCallback(async () => {
    if (videoRef.current && model && isDetectionStarted) {
      const predictions = await model.estimateHands(videoRef.current);
      if (predictions.length > 0) {
        const fingers = getExtendedFingers(predictions[0].landmarks);
        setDetectedFingers(fingers);
      } else {
        setDetectedFingers([]);
      }
      detectionTimeoutRef.current = setTimeout(detect, 2000);
    }
  }, [model, isDetectionStarted]);

  useEffect(() => {
    if (model && isDetectionStarted) {
      detect();
    }
    return () => clearTimeout(detectionTimeoutRef.current);
  }, [model, isDetectionStarted, detect]);

  // Separate component for permission notice
  const PermissionNotice = () => {
    if (!permissionDenied) return null;
    return (
      <Typography color="error">Need video permissions to proceed.</Typography>
    );
  };

  return (
    <Box sx={styles.root}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} align="center">
          {!isDetectionStarted && !permissionDenied && (
            <Button variant="contained" onClick={startVideo}>
              Start Magic
            </Button>
          )}
          <PermissionNotice />
          {isLoading && <Loader />}
          <video
            ref={videoRef}
            style={styles.video}
            hidden={!isDetectionStarted}
          />
        </Grid>
        {isDetectionStarted && (
          <>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <>
                <DetectedFingers
                  fingers={detectedFingersMemo}
                  gifUrl={currentGifUrl}
                />
              </>
            </Grid>
            <Grid item xs={12} sx={styles.noticeWrapper}>
              <Button variant="contained" onClick={stopVideo}>
                Stop Magic
              </Button>
              <Typography variant="subtitle1" gutterBottom>
                Detection runs every 2 seconds for CPU efficiency. Please be
                patient.
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HandGestureDetection;
