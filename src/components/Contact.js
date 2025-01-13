import React from "react";
import styles from "../styles/modules/Contact.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <div className={styles.contactSection}>
            <div className={styles.contactContainer}>
                {/* Left Section */}
                <div className={styles.contactLeft}>
                    <h2>Have Any Questions?</h2>
                    <p>
                        Lorem ipsum is a dummy text used to replace text in some areas just
                        for the purpose of an example. It can be used in publishing and
                        graphic design.
                    </p>
                    <div className={styles.contactInfo}>
                        <FaPhoneAlt className={styles.contactIcon} />
                        <span className={styles.contactText}>+11223344550</span>
                    </div>
                    <div className={styles.contactInfo}>
                        <FaEnvelope className={styles.contactIcon} />
                        <span className={styles.contactText}>info@example.com</span>
                    </div>
                    <div className={styles.contactInfo}>
                        <FaMapMarkerAlt className={styles.contactIcon} />
                        <span className={styles.contactText}>
              1243 Street New Chandigarh, INDIA
            </span>
                    </div>
                </div>

                {/* Right Section */}
                <div className={styles.contactRight}>
                    <h3>Contact us</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Your Name *"
                            className={styles.inputField}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter Your Email *"
                            className={styles.inputField}
                            required
                        />
                        <textarea
                            placeholder="Enter Your Message *"
                            className={styles.textareaField}
                            rows="5"
                            required
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>
                            Send Us →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
