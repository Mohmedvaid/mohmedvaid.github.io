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
import {
  readTimer,
  videoPermissionDeniedMessage,
  detectionNotice,
} from "../../config/fun";

const styles = {
  root: {
    width: "100%",
    marginTop: 15,
  },
  video: {
    transform: "scaleX(-1)",
    width: "80%", // Reduced default width
    maxHeight: "300px", // Reduced default max height
    borderRadius: "5px",
    "@media (maxWidth: 768px)": {
      // Media query for mobile devices
      width: "100%", // Full width on small screens
      objectFit: "cover", // Cover to zoom in
      height: "200px", // Fixed height to maintain aspect ratio
    },
  },
  noticeWrapper: {
    textAlign: "center",
    marginTop: 5,
    "@media (maxWidth: 768px)": {
      marginTop: 0,
    },
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
  const [isVideoReady, setIsVideoReady] = useState(true);
  const [isModelLoading, setIsModelLoading] = useState(false); // State to track model loading

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
        setIsModelLoading(true); // Set model loading to true
        const loadedModel = await handpose.load();
        setModel(loadedModel);
      } catch (error) {
        console.error("Failed to load model: ", error);
      } finally {
        setIsModelLoading(false); // Set model loading to false
      }
    };
    loadModel();
  }, []);

  // create a function to handle start video. This function will be passed to the button. on click show loader while model is loading. once model is loaded then check for streams, then set is loading false

  const startVideo = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsVideoReady(false); // Set video readiness to false
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
        setIsDetectionStarted(true);
        setPermissionDenied(false);
        setIsVideoReady(true); // Set video readiness to true
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
    if (isModelLoading) return setIsLoading(true); // If model is loading, set loading to true
    setIsLoading(false); // If model is loaded, set loading to false
    if (videoRef.current && model && isDetectionStarted) {
      const predictions = await model.estimateHands(videoRef.current);
      if (predictions.length > 0) {
        const fingers = getExtendedFingers(predictions[0].landmarks);
        setDetectedFingers(fingers);
      } else {
        setDetectedFingers([]);
      }
      detectionTimeoutRef.current = setTimeout(detect, readTimer || 1000);
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
      <Typography color="error">{videoPermissionDeniedMessage}</Typography>
    );
  };

  return (
    <Box sx={styles.root}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} align="center">
          {!isDetectionStarted && !permissionDenied && (
            <Button variant="contained" onClick={startVideo}>
              Start Gesture Detection
            </Button>
          )}
          <PermissionNotice />
          {(isLoading || !isVideoReady) && <Loader text="Preparing AI Model" />}
          <video
            ref={videoRef}
            style={styles.video}
            hidden={!isDetectionStarted}
            playsInline
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
              <Box sx={{ marginBottom: 2 }}>
                <Button variant="contained" onClick={stopVideo}>
                  Stop Magic
                </Button>
              </Box>
              <Typography variant="subtitle1">{detectionNotice}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HandGestureDetection;
