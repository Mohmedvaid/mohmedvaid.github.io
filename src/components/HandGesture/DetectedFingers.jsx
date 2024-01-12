import React, { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DetectedFingers = memo(
  ({ fingers, gifUrl }) => {
    return (
      <Box>
        <Typography textAlign="center" gutterBottom>
          {fingers.length === 0 ? "No fingers detected" : fingers.join(", ")}
        </Typography>
        {gifUrl && (
          <iframe
            src={gifUrl}
            width="100%"
            height="300"
            allowFullScreen
            title="Finger Gesture Gif"
            style={{ border: "none" }}
          ></iframe>
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
