import React from 'react';
import styles from '../../styles/modules/HomePage/homepage.module.css';

function HeroSection() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
                Design workflows<br />
                <span className={styles.hashtag}>#withMake</span>
            </h1>
            <p className={styles.heroSubtitle}>
                Make lets you design, build, and automate anything—from tasks and workflows
                to apps and systems—in a few clicks.
            </p>
            <div className={styles.heroButtons}>
                <a href="#getstarted" className={styles.getStarted}>Get started free</a>
                <p className={styles.noCredit}>No credit card required</p>
            </div>
        </section>
    );
}

export default HeroSection;
