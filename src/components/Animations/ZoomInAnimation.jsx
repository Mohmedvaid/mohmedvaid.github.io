// ZoomInAnimation.js
import React from "react";
import { motion } from "framer-motion";

const ZoomInAnimation = ({ children, duration = 0.5 }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInAnimation;
