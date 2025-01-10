import styles from '../styles/modules/CssTechniques.module.css';

function CssTechniques() {
    return (
        <div className={styles.container}>
            <h1>Techniki CSS</h1>
            <section>
                <h2>Opis deskryptorów CSS</h2>
                <table className={styles.cssTable}>
                    <thead>
                    <tr>
                        <th>Deskryptor</th>
                        <th>Opis</th>
                        <th>Przykład</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>margin</td>
                        <td>Określa odstęp zewnętrzny między elementem a innymi elementami.</td>
                        <td><code>margin: 10px;</code></td>
                    </tr>
                    <tr>
                        <td>padding</td>
                        <td>Określa odstęp wewnętrzny między zawartością a krawędzią elementu.</td>
                        <td><code>padding: 20px;</code></td>
                    </tr>
                    <tr>
                        <td>border</td>
                        <td>Dodaje obramowanie wokół elementu.</td>
                        <td><code>border: 1px solid black;</code></td>
                    </tr>
                    <tr>
                        <td>width</td>
                        <td>Określa szerokość elementu.</td>
                        <td><code>width: 100px;</code></td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>Określa wysokość elementu.</td>
                        <td><code>height: 50px;</code></td>
                    </tr>
                    <tr>
                        <td>background-color</td>
                        <td>Ustawia kolor tła elementu.</td>
                        <td><code>background-color: lightblue;</code></td>
                    </tr>
                    <tr>
                        <td>font-size</td>
                        <td>Określa rozmiar czcionki.</td>
                        <td><code>font-size: 16px;</code></td>
                    </tr>
                    <tr>
                        <td>text-align</td>
                        <td>Określa wyrównanie tekstu w elemencie.</td>
                        <td><code>text-align: center;</code></td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>Ustawia kolor tekstu.</td>
                        <td><code>color: blue;</code></td>
                    </tr>
                    <tr>
                        <td>font-weight</td>
                        <td>Określa grubość tekstu (np. pogrubienie).</td>
                        <td><code>font-weight: bold;</code></td>
                    </tr>
                    <tr>
                        <td>line-height</td>
                        <td>Ustawia wysokość linii tekstu.</td>
                        <td><code>line-height: 1.5;</code></td>
                    </tr>
                    <tr>
                        <td>text-transform</td>
                        <td>Zmienia wielkość liter w tekście.</td>
                        <td><code>text-transform: uppercase;</code></td>
                    </tr>

                    {/* Właściwości układu */}
                    <tr>
                        <td>display</td>
                        <td>Określa sposób wyświetlania elementu (blokowy, inline itp.).</td>
                        <td><code>display: flex;</code></td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td>Określa pozycjonowanie elementu.</td>
                        <td><code>position: absolute;</code></td>
                    </tr>
                    <tr>
                        <td>z-index</td>
                        <td>Określa kolejność nakładania elementów (przód/tył).</td>
                        <td><code>z-index: 10;</code></td>
                    </tr>

                    {/* Właściwości wizualne */}
                    <tr>
                        <td>box-shadow</td>
                        <td>Dodaje cień do elementu.</td>
                        <td><code>box-shadow: 5px 5px 15px rgba(0,0,0,0.3);</code></td>
                    </tr>
                    <tr>
                        <td>border-radius</td>
                        <td>Zaokrągla rogi elementu.</td>
                        <td><code>border-radius: 10px;</code></td>
                    </tr>
                    <tr>
                        <td>background-image</td>
                        <td>Dodaje obraz jako tło.</td>
                        <td><code>background-image: url('example.jpg');</code></td>
                    </tr>

                    {/* Animacje */}
                    <tr>
                        <td>transition</td>
                        <td>Definiuje przejście między stanami elementu.</td>
                        <td><code>transition: all 0.3s ease;</code></td>
                    </tr>
                    <tr>
                        <td>animation</td>
                        <td>Ustawia animację elementu za pomocą kluczowych klatek.</td>
                        <td><code>animation: fadeIn 2s infinite;</code></td>
                    </tr>
                    <tr>
                        <td>transform</td>
                        <td>Przekształca element (skalowanie, obrót, przesunięcie).</td>
                        <td><code>transform: rotate(45deg);</code></td>
                    </tr>
                    </tbody>
                </table>
            </section>

            {/* Flexbox */}
            <section>
                <h2>Flexbox</h2>
                <div className={styles.flexbox}>
                    <div>Element 1</div>
                    <div>Element 2</div>
                    <div>Element 3</div>
                </div>
            </section>

            {/* Grid */}
            <section>
                <h2>Grid</h2>
                <div className={styles.grid}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </section>

            {/* Animacje */}
            <section>
                <h2>Animacje</h2>
                <div className={styles.animatedText}>To jest animowany tekst</div>
            </section>

            {/* Transformacje */}
            <section>
                <h2>Transformacje</h2>
                <div className={styles.transformExample}>Najedź na mnie!</div>
            </section>

            {/* Gradienty i cienie */}
            <section>
                <h2>Gradienty i cienie</h2>
                <div className={styles.gradientBox}>Gradient z cieniem</div>
            </section>

            {/* Responsywność */}
            <section>
                <h2>Responsywność</h2>
                <div className={styles.responsiveExample}>
                    Zmniejsz okno przeglądarki, aby zobaczyć efekt!
                </div>
            </section>

            {/* Maskowanie i Clip-path */}
            <section>
                <h2>Maskowanie i Clip-path</h2>
                <div className={styles.maskingExample}>Maskowany tekst</div>
                <div className={styles.clipPathExample}>Nietypowy kształt</div>
            </section>

            {/* Filtry CSS */}
            <section>
                <h2>Filtry CSS</h2>
                <img
                    className={styles.filteredImage}
                    src="https://via.placeholder.com/300"
                    alt="Przykład filtra"
                />
            </section>
        </div>
    );
}

export default CssTechniques;
