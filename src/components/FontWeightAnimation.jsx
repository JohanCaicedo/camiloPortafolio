// src/components/FontWeightAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    transition: { staggerChildren: 0.1 },
  },
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const textVariants = {
  initial: { fontWeight: 500, color: '#e46f4d', scale: 1, rotate: 0, x: 0 },
  animate: {
    fontWeight: 600,
    color: '#96acc8',
    scale: 1.2,
    rotate: 360,
    x: 20,
    transition: {
      duration: 4,
      ease: 'anticipate',
      repeat: Infinity,
      repeatType: 'mirror',
    },
  },
};

const FontWeightAnimation = ({ children }) => {
  return (
    <motion.div variants={containerVariants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};

export default FontWeightAnimation;
