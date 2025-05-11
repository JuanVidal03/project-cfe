/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const TranslateUp = ({ children }) => {
  return (
      <motion.div
      whileInView={{ opacity: 1, y: 0  }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }} 
      >
        { children }
      </motion.div>
  );
};

export default TranslateUp;
