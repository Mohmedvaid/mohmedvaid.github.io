// src/components/ParallaxWrapper.jsx
import React, { useEffect } from "react";
import { Parallax, useParallaxController } from "react-scroll-parallax";

// TODO

const ParallaxWrapper = ({ speed, children, sx, translateY, translateX }) => {
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  }, [parallaxController]);

  const combinedSx = {
    ...sx,
    overflowX: "hidden",
  };

  return (
    <Parallax
      speed={speed}
      style={combinedSx}
      translateY={translateY}
      translateX={translateX}
    >
      {children}
    </Parallax>
  );
};

export default ParallaxWrapper;
