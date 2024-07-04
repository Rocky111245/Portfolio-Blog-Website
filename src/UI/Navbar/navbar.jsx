import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoText}>Ahmed Rakib's Portfolio</span>
                </Link>
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/projects" className={styles.navLink}>Projects</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about" className={styles.navLink}>About Me</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.rightSection}>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/Rocky111245" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/ahmed-rakib-al-hasan-9853a31a9" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://wa.me/60164690349" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    </div>
                    <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;