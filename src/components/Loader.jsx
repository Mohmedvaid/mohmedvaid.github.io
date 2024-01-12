import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CircularIndeterminate = () => (
  <Box
    sx={{
      position: "fixed", // Fixed position
      top: 0,
      left: 0,
      width: "100%", // Full width
      height: "100%", // Full height
      display: "flex",
      alignItems: "center", // Vertical center
      justifyContent: "center", // Horizontal center
      zIndex: 9999, // High z-index to be on top of other elements
    }}
  >
    <CircularProgress />
  </Box>
);

export default CircularIndeterminate;
