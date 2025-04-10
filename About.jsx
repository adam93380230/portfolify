import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <p className="text-lg">
        I am a passionate developer and designer with experience in building
        beautiful, responsive, and performant web applications. My focus is on
        creating seamless user experiences through clean and efficient code.
      </p>
    </motion.div>
  );
}
