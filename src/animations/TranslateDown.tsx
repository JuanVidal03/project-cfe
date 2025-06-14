import React from "react";
import { motion } from "motion/react";

const TranslateDown = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
};

export default TranslateDown;
