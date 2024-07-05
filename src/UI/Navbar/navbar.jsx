import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoText}>Ahmed Rakib's Portfolio</span>
                </Link>
                <div className={styles.hamburger} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        </li>
                        {location.pathname === '/' && (
                            <>
                                <li className={styles.navItem}>
                                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={styles.navLink}>Skills</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} className={styles.navLink}>Portfolio</a>
                                </li>
                            </>
                        )}
                        <li className={styles.navItem}>
                            <Link to="/about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About Me</Link>
                        </li>
                    </ul>
                </nav>
                <div className={`${styles.rightSection} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/Rocky111245" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/ahmed-rakib-al-hasan-9853a31a9" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://wa.me/60164690349" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    </div>
                    <Link to="/contact" className={styles.contactButton} onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;