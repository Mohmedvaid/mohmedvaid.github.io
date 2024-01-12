// src/components/ScratchOff.jsx
import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";

const ScratchOff = ({
  imageSrc,
  brushSize = 50,
  revealCode,
  containerWidth,
  containerHeight,
}) => {
  const canvasRef = useRef(null);

  const containerStyles = {
    position: "relative",
    width: containerWidth || "100%", // width from props or default
    height: containerHeight || "100%", // height from props or default
    // overflow: "hidden", // to ensure contents do not overflow
  };

  const canvasStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: "15px",
  };

  const revealedCodeStyles = {
    ...canvasStyles,
    fontFamily: "monospace",
    fontSize: "0.8rem",
    color: "white",
    backgroundColor: "black",
    overflow: "auto",
    zIndex: -1,
    padding: "10px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    wordWrap: "break-word", // Ensures text wraps
    whiteSpace: "pre-wrap", // Allows wrapping
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Maintain aspect ratio of the image
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = img.width * (drawHeight / img.height);
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = img.height * (drawWidth / img.width);
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.globalCompositeOperation = "destination-out";
    };

    const getPosition = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      let x, y;

      if (e.touches) {
        e.preventDefault();
        const touch = e.touches[0];
        x = (touch.clientX - rect.left) * scaleX;
        y = (touch.clientY - rect.top) * scaleY;
      } else {
        x = e.offsetX * scaleX;
        y = e.offsetY * scaleY;
      }
      return { x, y };
    };

    const scratch = (e) => {
      const { x, y } = getPosition(e);
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, 2 * Math.PI);
      ctx.fill();
    };

    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("touchmove", scratch);

    return () => {
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("touchmove", scratch);
    };
  }, [imageSrc, brushSize, containerWidth, containerHeight]);

  return (
    <Box sx={containerStyles}>
      {/* <img src={revealImageSrc} alt="Revealed" style={revealedImageStyles} /> */}
      <div style={revealedCodeStyles}>{revealCode}</div>
      <canvas ref={canvasRef} style={canvasStyles}></canvas>
    </Box>
  );
};

export default ScratchOff;
