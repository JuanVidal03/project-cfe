import React from "react";
import { motion } from "motion/react";

const FadeAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
