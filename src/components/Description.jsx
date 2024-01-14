// src/components/Description.jsx
import React from "react";
import Typography from "@mui/material/Typography";

import TypingEffect from "../components/TypingEffect";
import { description } from "../data/home";
import theme from "../config/theme";

const styles = {
  textTitle: {
    fonts: theme.typography.body2.fontFamily,
    fontSize: theme.typography.h3.fontSize,
    marginBottom: "100px",
    textAlign: "center",
    "@media (maxWidth: 768px)": {
      marginBottom: "50px",
    },
  },
  description: {
    fontSize: theme.typography.lg,
    textAlign: "center",
  },
};

const HomePage = () => {
  return (
    <>
      <TypingEffect variant="body2" sx={styles.textTitle}>
        {description.title}
      </TypingEffect>
      <Typography sx={styles.description}>{description.text}</Typography>
    </>
  );
};

export default HomePage;
