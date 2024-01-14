import React, { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// disable interaction on iframe
const styles = {
  iframeWrapper: {
    position: "relative",
    width: "100%",
    height: "300px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    cursor: "default",
  },
};

const DetectedFingers = memo(
  ({ fingers, gifUrl }) => {
    return (
      <Box>
        <Typography textAlign="center" gutterBottom>
          {fingers.length === 0 ? "No fingers detected on camera" : fingers.join(", ")}
        </Typography>
        {gifUrl && (
          <div style={styles.iframeWrapper}>
            <iframe
              src={gifUrl}
              width="100%"
              height="300"
              allowFullScreen
              title="Finger Gesture Gif"
              style={{ border: "none" }}
            ></iframe>
            <div style={styles.overlay}></div>
          </div>
        )}
      </Box>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.gifUrl === nextProps.gifUrl &&
      prevProps.fingers.join(",") === nextProps.fingers.join(",")
    );
  }
);

export default DetectedFingers;
