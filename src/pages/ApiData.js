import React, { useState, useEffect } from 'react';
import styles from '../styles/modules/ApiData.module.css';

function ApiData() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Pobieranie danych z API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Błąd w pobieraniu danych');
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data.slice(0, 10)); // Pobierz tylko 10 pierwszych postów
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>API i Dane</h2>
            {loading && <p>Ładowanie danych...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {!loading && !error && (
                <ul className={styles.postsList}>
                    {posts.map((post) => (
                        <li key={post.id} className={styles.postItem}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ApiData;
