import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/NotFound.module.css';

function NotFoundPage() {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.glitchWrapper}>
                <div className={styles.glitchText} data-text="404">404</div>
            </div>
            <p className={styles.subMessage}>
                Oops!, Page Not Found
            </p>
            <Link to="/" className={styles.homeLink}>
                Go back home
            </Link>
        </div>
    );
}

export default NotFoundPage;
