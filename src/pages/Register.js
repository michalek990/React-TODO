import React from 'react';
import styles from '../styles/modules/Register.module.css';
import { Link } from 'react-router-dom';
import logo from "../styles/assets/img.png";
import leftImage from "../styles/assets/sunset.png"; // Replace with your image path

function RegisterPage() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.leftSection}>
                    <img src={leftImage} alt="Background" className={styles.backgroundImage} />
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.formContainer}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <h1>
                            Get <span className={styles.welcome}>started!</span>
                        </h1>
                        <form className={styles.form}>
                            <input type="text" placeholder="Full Name" className={styles.inputField} />
                            <input type="email" placeholder="Email Address" className={styles.inputField} />
                            <input type="password" placeholder="Password" className={styles.inputField} />
                            <button type="submit" className={styles.registerButton}>
                                Sign Up
                            </button>
                        </form>
                        <Link to="/login" className={styles.loginLink}>
                            Already have an account? Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
