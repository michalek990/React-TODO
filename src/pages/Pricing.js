import React, { useState } from 'react';
import styles from '../styles/modules/Pricing.module.css';

function Pricing() {
    const [billingCycle, setBillingCycle] = useState("Monthly"); // Stan przechowujący wybraną opcję

    const plans = [
        {
            title: "Starter",
            price: billingCycle === "Monthly" ? "$19" : "$190", // Cena zależna od cyklu
            features: [
                "Basic analytics",
                "Real-time updates",
                "Access all basic features"
            ],
            button: "Choose plan",
            buttonStyle: styles.freeButton,
        },
        {
            title: "Professional",
            price: billingCycle === "Monthly" ? "$54" : "$540",
            features: [
                "All Starter features",
                "Customizable options",
                "Priority support"
            ],
            button: "Choose plan",
            buttonStyle: styles.proButton,
        },
        {
            title: "Company",
            price: billingCycle === "Monthly" ? "$89" : "$890",
            features: [
                "All Professional features",
                "Advanced scaling tools",
                "Performance grade analytics",
                "Custom support plans"
            ],
            button: "Choose plan",
            buttonStyle: styles.scalerButton,
            highlighted: true, // Wyróżniona karta
        }
    ];

    return (
        <section className={styles.pricing}>
            <h2 className={styles.title}>Plans & Pricing</h2>
            <p className={styles.description}>
                Whether your time-saving automation needs are large or small, we're here to help you scale.
            </p>
            {/* Przełącznik cyklu rozliczeniowego */}
            <div className={styles.planToggle}>
                <button
                    className={`${styles.toggle} ${billingCycle === "Monthly" ? styles.active : ''}`}
                    onClick={() => setBillingCycle("Monthly")}
                >
                    Monthly
                </button>
                <button
                    className={`${styles.toggle} ${billingCycle === "Yearly" ? styles.active : ''}`}
                    onClick={() => setBillingCycle("Yearly")}
                >
                    Yearly
                </button>
            </div>
            <div className={styles.planContainer}>
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`${styles.planCard} ${plan.highlighted ? styles.highlighted : ''}`}
                    >
                        <h3 className={styles.planTitle}>{plan.title}</h3>
                        <p className={styles.planPrice}>{plan.price}/month</p>
                        <ul className={styles.planFeatures}>
                            {plan.features.map((feature, i) => (
                                <li key={i} className={styles.feature}>{feature}</li>
                            ))}
                        </ul>
                        <button className={`${styles.planButton} ${plan.buttonStyle}`}>
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
            <section className={styles.featuresComparison}>
                <h3 className={styles.subtitle}>Compare Features</h3>
                <div className={styles.comparisonTable}>
                    <div className={styles.row}>
                        <span className={styles.feature}>24/7 Support</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.feature}>Custom Reports</span>
                        <span className={styles.check}>✘</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.feature}>Priority Support</span>
                        <span className={styles.check}>✘</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.feature}>Advanced Analytics</span>
                        <span className={styles.check}>✘</span>
                        <span className={styles.check}>✘</span>
                        <span className={styles.check}>✔</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.feature}>Team Collaboration</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.feature}>Custom Branding</span>
                        <span className={styles.check}>✘</span>
                        <span className={styles.check}>✔</span>
                        <span className={styles.check}>✔</span>
                    </div>
                </div>
            </section>

        </section>

    );
}

export default Pricing;
