import React from "react";
import Box from "@mui/material/Container";

const style = {
  root: {
    my: "100px",
    padding: "0",
  },
};

const Section = ({ children }) => {
  // add section type
  return (
    <Box component="section" style={style.root}>
      {children}
    </Box>
  );
};

export default Section;
