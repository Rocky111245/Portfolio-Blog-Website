import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Corrected the import

function Navbar() {
    return (
        <div className={styles.navbar_container}>
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
                    <li className={styles.navItem}>
                        <Link to="/contact" className={styles.contactButton}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
