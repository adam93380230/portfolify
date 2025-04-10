import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Build responsive, performant, and user-friendly websites.",
  },
  {
    title: "UI/UX Design",
    description: "Craft beautiful and intuitive user interfaces for apps and websites.",
  },
  {
    title: "SEO Optimization",
    description: "Improve website ranking with on-page and off-page SEO strategies.",
  },
];

export default function Services() {
  return (
    <motion.div
      key="services"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
