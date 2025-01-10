import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import styles from '../styles/modules/Animations.module.css';

function Animations() {
    // React Spring animation
    const springStyle = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 500 },
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Animacje w React</h2>

            {/* Animacje CSS */}
            <div className={styles.section}>
                <h3>Animacje CSS</h3>
                <div className={styles.animatedBox}>Animowany Box</div>
            </div>

            {/* Animacje React Spring */}
            <div className={styles.section}>
                <h3>React Spring</h3>
                <animated.div style={springStyle} className={styles.springBox}>
                    React Spring Box
                </animated.div>
            </div>

            {/* Animacje Framer Motion */}
            <div className={styles.section}>
                <h3>Framer Motion</h3>
                <motion.div
                    className={styles.motionBox}
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5}}
                >
                    Framer Motion Box
                </motion.div>
            </div>
        </div>
    );
}

export default Animations;
