import styles from '../styles/modules/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 React Learning Center. Wszelkie prawa zastrzeżone.</p>
            <p>
                Stworzono przez <a href="https://github.com/your-profile" target="_blank" rel="noreferrer">Twoje Imię</a>.
            </p>
        </footer>
    );
}

export default Footer;
