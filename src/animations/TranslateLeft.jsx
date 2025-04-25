/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const TranslateLeft = ({ children }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0  }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.2 }} 
    >
      { children }
    </motion.div>
  );
};

export default TranslateLeft;
