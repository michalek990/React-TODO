import React, { useState } from "react";
import styles from "../styles/modules/About.module.css";
import { FaHandsHelping, FaDonate, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutPage() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState("");

    const handleReadMore = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className={styles.aboutPage}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1>Together we can make a Difference</h1>
                    <p>
                        Help today because tomorrow you may be the one who needs helping!
                        Forget what you can get and see what you can give.
                    </p>
                    <div className={styles.buttons}>
                        <Link className={styles.joinButton} to="/">Join With Us</Link>
                        <Link className={styles.donateButton} to="/pricing">Donate now</Link>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className={styles.cardsSection}>
                <div className={styles.card}>
                    <FaDonate className={styles.icon} />
                    <h3>Make Donation</h3>
                    <p>
                        Help today because tomorrow you may be the one who needs helping!
                    </p>
                    <button
                        onClick={() =>
                            handleReadMore("Donating helps provide critical resources to those in need. Your generosity can change lives.")
                        }
                        className={styles.readMore}
                    >
                        Read More
                    </button>
                </div>
                <div className={styles.card}>
                    <FaHandsHelping className={styles.icon} />
                    <h3>Fundraising</h3>
                    <p>
                        Help today because tomorrow you may be the one who needs helping!
                    </p>
                    <button
                        onClick={() =>
                            handleReadMore("Fundraising is a powerful way to bring people together for a cause. Join us to make a collective impact.")
                        }
                        className={styles.readMore}
                    >
                        Read More
                    </button>
                </div>
                <div className={styles.card}>
                    <FaUsers className={styles.icon} />
                    <h3>Become a Volunteer</h3>
                    <p>
                        Help today because tomorrow you may be the one who needs helping!
                    </p>
                    <button
                        onClick={() =>
                            handleReadMore("Volunteering allows you to directly support those in need and build stronger communities.")
                        }
                        className={styles.readMore}
                    >
                        Read More
                    </button>
                </div>
            </section>

            {showPopup && (
                <div className={styles.popupOverlay}>
                    <div className={styles.popup}>
                        <h3>More Information</h3>
                        <p>{popupContent}</p>
                        <button onClick={handleClosePopup} className={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AboutPage;
