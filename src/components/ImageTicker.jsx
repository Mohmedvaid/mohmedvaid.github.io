import React from "react";
import { Box, styled } from "@mui/material";

const TickerContainer = styled(Box)(({ orientation }) => ({
  overflow: "hidden",
  position: "relative",
  height: orientation === "vertical" ? "500px" : "100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Image = styled("img")(({ orientation }) => ({
  height: orientation === "vertical" ? "auto" : "100px",
  width: orientation === "vertical" ? "150px" : "auto",
  display: "block",
  margin: orientation === "vertical" ? "50px auto" : "0 30px",
  background: "#fff",
  padding: "10px",
  boxSizing: "border-box",
  borderRadius: "10px",
}));

const TickerContent = styled(Box)(({ orientation }) => ({
  display: "inline-flex",
  flexDirection: orientation === "vertical" ? "column" : "row",
  animation: `ticker 45s linear infinite`,
  "@keyframes ticker": {
    "0%": {
      transform: orientation === "vertical" ? "translateY(0)" : "translateX(0)",
    },
    "100%": {
      transform:
        orientation === "vertical" ? "translateY(-50%)" : "translateX(-50%)",
    },
  },
}));

const ImageTicker = ({ images, orientation = "horizontal" }) => {
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <TickerContainer orientation={orientation}>
      <TickerContent orientation={orientation}>
        {duplicatedImages.map((image, index) => (
          <Image
            key={`${index}-${image}`}
            src={image}
            alt={`ticker-image-${index}`}
            orientation={orientation}
          />
        ))}
      </TickerContent>
    </TickerContainer>
  );
};

export default ImageTicker;
