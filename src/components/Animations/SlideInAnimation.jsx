// SlideInAnimation.js
import React from "react";
import { motion } from "framer-motion";

const SlideInAnimation = ({ children, direction = "left", duration = 0.5 }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideInAnimation;
