import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import * as tf from "@tensorflow/tfjs"; // needed for handpose
import * as handpose from "@tensorflow-models/handpose";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import Loader from "../Loader";
import DetectedFingers from "./DetectedFingers";
import getExtendedFingers from "./getExtendedFingers";
import getFingerGestureGif from "./getFingerGestureGif";
import {
  readTimer,
  videoPermissionDeniedMessage,
  detectionNotice,
} from "../../config/fun";

const HandGestureDetection = () => {
  const videoRef = useRef();
  const streamRef = useRef();
  const detectionTimeoutRef = useRef();
  const isMobile = useMediaQuery("(max-width:768px)");
  let styles = {
    root: {
      width: "100%",
      marginTop: 15,
    },
    video: {
      transform: "scaleX(-1)",
      width: "100%", // Full width on small screens
      maxHeight: "300px", // Reduced default max height
      borderRadius: "5px",
    },
    noticeWrapper: {
      textAlign: "center",
      marginTop: 5,
      "@media (maxWidth: 768px)": {
        marginTop: 0,
      },
    },
  };

  if (isMobile) {
    styles.video = {
      ...styles.video,
      objectFit: "cover", // Cover to zoom in
      maxHeight: "200px", // Fixed height to maintain aspect ratio
      width: "80%", // Full width on small screens
    };
  }

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
      {(isLoading || !isVideoReady) && !permissionDenied && (
        <Loader text="Preparing AI Model" />
      )}
      <Grid container spacing={2} alignItems="end" justifyContent="center">
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {!isDetectionStarted && !permissionDenied && (
            <Button variant="contained" onClick={startVideo}>
              Start Gesture Detection
            </Button>
          )}
          {isDetectionStarted && !isLoading && (
            <>
              <Button variant="contained" onClick={stopVideo} sx={{ mb: 2 }}>
                Stop Magic
              </Button>
              <Typography variant="subtitle1">{detectionNotice}</Typography>
            </>
          )}
        </Grid>

        <Grid item xs={12} style={styles.noticeWrapper}>
          <PermissionNotice />
        </Grid>

        <Grid item md={6} xs={12} align="center">
          <video
            ref={videoRef}
            style={styles.video}
            hidden={!isDetectionStarted || isLoading}
            playsInline
          />
        </Grid>

        {isDetectionStarted && !isLoading && (
          <Grid item md={6} xs={12}>
            <DetectedFingers
              fingers={detectedFingersMemo}
              gifUrl={currentGifUrl}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HandGestureDetection;
