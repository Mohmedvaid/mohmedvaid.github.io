// src/components/Description.jsx
import React from "react";
import Typography from "@mui/material/Typography";

import TypingEffect from "../components/TypingEffect";
import { description } from "../data/home";
import theme from "../config/theme";

const styles = {
  textTitle: {
    fontWeight: "bold",
    fontSize: theme.typography.title.fontSize,
    marginBottom: "100px",
    textAlign: "center",
    '@media (max-width:600px)': {
      fontSize: theme.typography.h2.fontSize,
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
      <TypingEffect variant="h3" sx={styles.textTitle}>
        {description.title}
      </TypingEffect>
      <Typography sx={styles.description}>{description.text}</Typography>
    </>
  );
};

export default HomePage;
