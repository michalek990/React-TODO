import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../styles/modules/Navbar.module.css';
import logo from '../styles/assets/img.png';

function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logoContainer}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <span className={styles.logoText}>React Learning Center</span>
            </Link>
            <ul className={styles.navLinks}>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/todo">TODO</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className={styles.navActions}>
                <Link className={styles.signIn} to="/login">Sign in</Link>
                <Link className={styles.getStarted} to="/register">Get started free</Link>
            </div>
        </nav>
    );
}

export default Navbar;
