import React from 'react';
import { motion } from 'framer-motion';
import styles from './ExpertiseShowcase.module.css';

const ExpertiseItem = ({ title, description }) => (
  <motion.div 
    className={styles.expertiseItem}
    initial={{ opacity: 0, y: 50, rotateX: 10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    whileHover={{ y: -10, scale: 1.05 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const ExpertiseShowcase = () => {
  const expertiseList = [
    {
      title: "Interdisciplinary Approach",
      description: "Combining Renewable Energy Engineering with Software Development to explore sustainable, efficient solutions."
    },
    {
      title: "Neural Network Exploration",
      description: "Developed FLUX, a neural network framework, as an educational tool to deepen understanding of mathematics and linear algebra in deep learning."
    },
    {
      title: "Algorithm Enthusiast",
      description: "Passionate about algorithms and data structures, always eager to tackle new optimization challenges."
    },
    {
      title: "Diverse Tech Stack",
      description: "Experience with C, C++, HTML, CSS, JavaScript, React, and Node.js, applied in various personal and client projects."
    },
    {
      title: "Embedded Systems Curiosity",
      description: "Explored embedded systems through hands-on projects, driven by a desire to understand hardware-software integration."
    },
    {
      title: "Business Perspective",
      description: "Pursuing an MBA to gain insights into how technical solutions can address real-world business challenges."
    },
    {
      title: "Self-Directed Learner",
      description: "Embrace new challenges through reverse engineering and hands-on experimentation, constantly expanding my skill set."
    }
  ];

  return (
    <section className={styles.expertiseShowcase}>
      <motion.h2 
        initial={{ opacity: 0, y: -50, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Diverse Skills & Interests
      </motion.h2>
      <div className={styles.expertiseGrid}>
        {expertiseList.map((item, index) => (
          <ExpertiseItem 
            key={index} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertiseShowcase;