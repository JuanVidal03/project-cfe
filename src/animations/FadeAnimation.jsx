/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const FadeAnimation = ({ children }) => {
  return (
			<motion.div
        whileInView={{ opacity: 1 }}
				initial={{ opacity: 0, }}
				transition={{
					ease: "easeInOut",
					duration: 1
				}}
			>
				{ children }
			</motion.div>
	);
};

export default FadeAnimation;
