import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from '../styles/modules/Navbar.module.css';
import logo from '../styles/assets/img.png';

function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    return (
        <nav className={styles.navbar}>
            {/* Sekcja logo z tekstem */}
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span className={styles.logoText}>React Learning Center</span>
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/todo">About</Link></li>
                <li><Link to="/todo">Pricing</Link></li>
                <li
                    className={styles.dropdown}
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <span className={styles.dropdownTrigger}>Learn</span>
                    <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ''}`}>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/hooks">Hooks</Link></li>
                        <li><Link to="/api">API</Link></li>
                    </ul>
                </li>
                <li><Link to="/todo">TODO</Link></li>
                <li><Link to="/todo">Contact</Link></li>
            </ul>
            <div className={styles.navActions}>
                <button className={styles.signIn}>Sign in</button>
                <button className={styles.getStarted}>Get started free</button>
            </div>
        </nav>
    );
}

export default Navbar;
