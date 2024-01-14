import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Section from "../Section";

const Section4 = () => (
  <Section>
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to="/fun"
      >
        Checkout Gesture Detection
      </Button>
    </Box>
  </Section>
);

export default Section4;
