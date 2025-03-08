import "./App.css";
import TextAttributeCounter from "./components/TextAttributeCounter";
import TextDensityCounter from "./components/TextDensityCounter";
import TextEntryForm from "./components/TextEntryForm";
import TextReadingTime from "./components/TextReadingTime";

function App() {
    return (
        <>
            <header>
                <h1>Character Counter</h1>
            </header>
            <main>
                <h2>Analyze your text in real-time.</h2>
                <TextEntryForm />
                <TextReadingTime />
                <TextAttributeCounter />
                <TextDensityCounter />
            </main>
        </>
    );
}

export default App;
