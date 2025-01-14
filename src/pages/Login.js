import React from "react";
import styles from "../styles/modules/Login.module.css";
import logo from "../styles/assets/img.png";
import rightImage from "../styles/assets/sunset.png";
import {Link} from "react-router-dom"; // Replace with your image path

function LoginPage() {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                    <img src={logo} alt="Logo" className={styles.logo}/>
                    <h1 className={styles.welcomeText}>
                        Hello, <span>welcome!</span>
                    </h1>
                    <form className={styles.loginForm}>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={styles.inputField}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.inputField}
                        />
                        <Link to="/" className={styles.loginButton}>
                            Login
                        </Link>
                        <Link to="/register" className={styles.signupButton}>
                            Sign up
                        </Link>
                    </form>
                    <div className={styles.extraActions}>
                        <a href="/forgot-password" className={styles.link}>
                            Forgot password?
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                    <img
                        src={rightImage}
                        alt="Welcome illustration"
                        className={styles.rightImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;