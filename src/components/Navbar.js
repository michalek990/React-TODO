import { Link } from 'react-router-dom';
import styles from '../styles/modules/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>React Learning Center</h1>
            <ul className={styles.navLinks}>
                <li>
                    <Link to="/">Strona Główna</Link>
                </li>
                <li>
                    <Link to="/css">Techniki CSS</Link>
                </li>
                <li>
                    <Link to="/hooks">Hooki React</Link>
                </li>
                <li>
                    <Link to="/api">API i Dane</Link>
                </li>
                <li>
                    <Link to="/optimization">Optymalizacja</Link>
                </li>
                <li>
                    <Link to="/animations">Animacje</Link>
                </li>
                <li>
                    <Link to="/todo">TODO</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
