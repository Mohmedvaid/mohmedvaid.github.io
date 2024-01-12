// src/components/TypingEffect.jsx
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const styles = {
  cursor: {
    animation: `${blink} 1s step-end infinite`,
  },
};

const TypingEffect = ({ variant, children, speed = 100, sx }) => {
  const [typedText, setTypedText] = useState("");
  const text = React.Children.toArray(children).join("");

  useEffect(() => {
    if (typedText.length < text.length) {
      const timer = setTimeout(() => {
        setTypedText(text.slice(0, typedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [text, typedText, speed]);

  return (
    <Typography component="span" sx={{ ...sx, display: "inline" }} variant={variant}>
      {typedText}
      <Typography component="span" sx={{ ...styles.cursor, ...sx }}>
        |
      </Typography>
    </Typography>
  );
};

export default TypingEffect;
