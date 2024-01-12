// FadeInAnimation.js
import React from "react";
import { motion } from "framer-motion";

const FadeInAnimation = ({ children, duration = 1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
