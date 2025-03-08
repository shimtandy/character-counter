import "./App.css";

function App() {
    return (
        <>
            <header>
                <h1>Character Counter</h1>
            </header>
            <main>
                <h2>Analyze your text in real-time.</h2>
                <form>
                    <label>
                        <textarea></textarea>
                        <span>Text to be analyzed</span>
                    </label>
                    <label>
                        <input type="checkbox" />
                        Exclude Spaces
                    </label>
                    <label>
                        <input type="checkbox" />
                        Set Character Limit
                    </label>
                </form>
                Approx. reading time: <span>{"< 1 minute"}</span>
                <ol>
                    <li>278 Characters</li>
                    <li>39 Word Count</li>
                    <li>04 Sentence Count</li>
                </ol>
                <section>
                    <h3>Letter Density</h3>
                    <ol>
                        <li>E: 1</li>
                        <li>D: 20</li>
                    </ol>
                </section>
            </main>
        </>
    );
}

export default App;
