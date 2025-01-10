import React, { useState, useEffect, useReducer } from 'react';
import styles from '../styles/modules/ReactHooks.module.css';

function ReactHooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Licznik: ${count}`;
    }, [count]);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment': return state + 1;
            case 'decrement': return state - 1;
            default: return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Hooki React</h2>
            <div className={styles.counter}>
                <p>Licznik (<strong>useState</strong>): <span className={styles.value}>{count}</span></p>
                <button onClick={() => setCount(count + 1)} className={styles.button}>Zwiększ</button>
            </div>
            <div className={styles.counter}>
                <p>Licznik (<strong>useReducer</strong>): <span className={styles.value}>{state}</span></p>
                <button onClick={() => dispatch({ type: 'increment' })} className={styles.button}>Zwiększ</button>
            </div>

            <h3 className={styles.tableHeading}>Tabela Hooków w React</h3>
            <table className={styles.hooksTable}>
                <thead>
                <tr>
                    <th>Nazwa Hooka</th>
                    <th>Opis</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>useState</td>
                    <td>Pozwala zarządzać stanem w komponentach funkcyjnych.</td>
                </tr>
                <tr>
                    <td>useEffect</td>
                    <td>Obsługuje efekty uboczne, takie jak pobieranie danych czy zmiana tytułu strony.</td>
                </tr>
                <tr>
                    <td>useReducer</td>
                    <td>Alternatywa dla useState przy bardziej złożonym stanie.</td>
                </tr>
                <tr>
                    <td>useContext</td>
                    <td>Pozwala korzystać z Context API bez przekazywania propsów.</td>
                </tr>
                <tr>
                    <td>useRef</td>
                    <td>Tworzy referencje do elementów DOM lub wartości.</td>
                </tr>
                <tr>
                    <td>useMemo</td>
                    <td>Optymalizuje kosztowne obliczenia poprzez zapamiętywanie ich wyników.</td>
                </tr>
                <tr>
                    <td>useCallback</td>
                    <td>Zapamiętuje funkcje, aby uniknąć ich ponownego tworzenia.</td>
                </tr>
                <tr>
                    <td>useLayoutEffect</td>
                    <td>Podobny do useEffect, ale wywoływany przed renderowaniem elementów.</td>
                </tr>
                <tr>
                    <td>useDebugValue</td>
                    <td>Dodaje niestandardową wartość do debugowania hooków w DevTools.</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ReactHooks;
