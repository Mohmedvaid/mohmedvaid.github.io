import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CircularIndeterminate = ({ text }) => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column", // Set direction to column to stack children vertically
      alignItems: "center", // Center children horizontally
      justifyContent: "center", // Center children vertically
      zIndex: 9999,
    }}
  >
    <Box>
      {/* Wrap loader in its own Box */}
      <CircularProgress />
    </Box>
    {text && ( // Conditionally render text if it's provided
      <Box sx={{ marginTop: 2 }}>
        {/* Wrap text in its own Box */}
        <Typography variant="subtitle1">{text}</Typography>
      </Box>
    )}
  </Box>
);

export default CircularIndeterminate;
