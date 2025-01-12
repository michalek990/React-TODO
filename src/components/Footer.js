import React from 'react';
import styles from '../styles/modules/Footer.module.css';
import logo from '../styles/assets/img.png'; // Ścieżka do logo
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Logo i opis */}
                <div className={styles.logoSection}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem totam rem aperiam.
                    </p>
                    <p className={styles.contact}>
                        <i className="fas fa-phone"></i> +012 (345) 678 99
                    </p>
                </div>

                {/* Linki */}
                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <h4>Resources</h4>
                        <a href="/">SaaS Development</a>
                        <a href="/">Our Products</a>
                        <a href="/">User Flow</a>
                        <a href="/">User Strategy</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Company</h4>
                        <a href="/">About TailGrids</a>
                        <a href="/">Contact & Support</a>
                        <a href="/">Success History</a>
                        <a href="/">Setting & Privacy</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>Quick Links</h4>
                        <a href="/">Premium Support</a>
                        <a href="/">Our Services</a>
                        <a href="/">Know Our Team</a>
                        <a href="/">Download App</a>
                    </div>
                </div>

                {/* Ikony społecznościowe */}
                <div className={styles.socials}>
                    <h4>Follow Us On</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <i className="fab fa-facebook-f"></i> {/* Ikona Facebook */}
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <i className="fab fa-twitter"></i> {/* Ikona Twitter */}
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <i className="fab fa-youtube"></i> {/* Ikona YouTube */}
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                            <i className="fab fa-linkedin-in"></i> {/* Ikona LinkedIn */}
                        </a>
                    </div>
                    <p>© 2025 TailGrids</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
