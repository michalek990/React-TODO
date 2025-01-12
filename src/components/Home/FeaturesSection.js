import React from 'react';
import { FaRocket, FaCode, FaLightbulb } from 'react-icons/fa';
import styles from '../../styles/modules/HomePage/homepage.module.css';

function FeaturesSection() {
    const features = [
        { icon: <FaRocket />, title: 'Fast Performance', description: 'Our platform is built for speed and reliability.' },
        { icon: <FaCode />, title: 'Developer Friendly', description: 'Easily integrate with our APIs and tools.' },
        { icon: <FaLightbulb />, title: 'Innovative Ideas', description: 'We provide cutting-edge solutions for modern problems.' },
    ];

    return (
        <section id="features" className={styles.features}>
            <h2 className={styles.title}>Features</h2>
            <div>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <div className={styles.featureIcon}>{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p className={styles.text}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;
