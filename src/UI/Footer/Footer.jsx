import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Ahmed Rakib Al Hasan</h3>
          <p>Software Developer & Renewable Energy Engineer</p>
          <div className={styles.socialIcons}>
            <a href="https://github.com/Rocky111245" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ahmed-rakib-al-hasan-9853a31a9" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/60164690349" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Site Map</h4>
          <ul>
            <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="skills" smooth={true} duration={500}>Skills and Technologies</ScrollLink></li>
            <li><ScrollLink to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink></li>
            <li><ScrollLink to="works" smooth={true} duration={500}>Projects</ScrollLink></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>Email: rakibalhasan170@.gmail.com</p>
          <p>Phone: (+60)164690349</p>
          <p>Malaysia, Sepang, Selangor</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Ahmed Rakib Al Hasan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
