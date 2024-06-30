import React from 'react';
import { Link } from 'react-router-dom';
import navbar_styles from './Navbar.module.css'; // Corrected the import

function Navbar() {
    return (
        <div className={navbar_styles.navbar_container}>
                <Link to="/" className={navbar_styles.logo}>
                    <span className={navbar_styles.logoText}>Ahmed Rakib</span>
                </Link>
            <nav className={navbar_styles.navbar}>
                <ul className={navbar_styles.navList}>
                    <li className={navbar_styles.navItem}>
                        <Link to="/" className={navbar_styles.navLink}>Home</Link>
                    </li>
                    <li className={navbar_styles.navItem}>
                        <Link to="/about" className={navbar_styles.navLink}>About Me</Link>
                    </li>
                    <li className={navbar_styles.navItem}>
                        <Link to="/projects" className={navbar_styles.navLink}>Projects</Link>
                    </li>
                    <li className={navbar_styles.navItem}>
                        <Link to="/blogs" className={navbar_styles.navLink}>Blogs</Link>
                    </li>
                    <li className={navbar_styles.navItem}>
                        <Link to="/contact" className={navbar_styles.contactButton}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
