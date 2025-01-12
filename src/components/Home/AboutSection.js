import React from 'react';
import styles from '../../styles/modules/HomePage/homepage.module.css';
import image from '../../styles/assets/heroImage.png';
function AboutSection() {
    return (
        <section className={`${styles.section} ${styles.about}`}>
            <div className={styles.aboutContent}>
                <h2 className={styles.title}>About Us</h2>
                <p className={styles.text}>
                    We are passionate about delivering the best solutions for your business. Our team of experts is here to help you succeed.
                </p>
            </div>
            <div className={styles.aboutImageContainer}>
                <img
                    src={image}
                    alt="Team working together"
                    className={styles.aboutImage}
                />
            </div>
        </section>
    );
}

export default AboutSection;
