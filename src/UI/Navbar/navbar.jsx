import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
                    <span className={styles.logoText}>Ahmed Rakib</span>
                </Link>
                <nav className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.navLink}>Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/about" className={styles.navLink}>About Me</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/projects" className={styles.navLink}>Projects</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link to="/blogs" className={styles.navLink}>Blogs</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
            </div>
        </header>
    );
}

export default Navbar;