import React, { useState, useMemo, useCallback } from 'react';
import styles from '../styles/modules/Optimization.module.css';

// Komponent memoizowany z React.memo
const MemoizedComponent = React.memo(({ count }) => {
    console.log('Renderowanie MemoizedComponent');
    return <p>Licznik (React.memo): {count}</p>;
});

// Komponent główny
function Optimization() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);

    // useMemo – kosztowne obliczenia
    const expensiveCalculation = useMemo(() => {
        console.log('Wykonywanie kosztownych obliczeń...');
        return count * 2;
    }, [count]);

    // useCallback – zapamiętanie funkcji
    const handleClick = useCallback(() => {
        console.log('Kliknięto przycisk!');
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Optymalizacje w React</h2>

            <div className={styles.section}>
                <h3>React.memo</h3>
                <MemoizedComponent count={count} />
                <button onClick={() => setCount(count + 1)} className={styles.button}>
                    Zwiększ licznik
                </button>
                <button onClick={() => setOtherCount(otherCount + 1)} className={styles.button}>
                    Zwiększ inny licznik
                </button>
                <p>Inny licznik: {otherCount}</p>
            </div>

            <div className={styles.section}>
                <h3>useMemo</h3>
                <p>Wynik kosztownych obliczeń: {expensiveCalculation}</p>
                <button onClick={() => setCount(count + 1)} className={styles.button}>
                    Aktualizuj licznik
                </button>
            </div>

            <div className={styles.section}>
                <h3>useCallback</h3>
                <button onClick={handleClick} className={styles.button}>
                    Kliknij mnie (z useCallback)
                </button>
            </div>
        </div>
    );
}

export default Optimization;
