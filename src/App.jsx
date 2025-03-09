import "./App.css";
import TextAttributeCounter from "./components/TextAttributeCounter";
import TextDensityCounter from "./components/TextDensityCounter";
import TextEntryForm from "./components/TextEntryForm";
import TextReadingTime from "./components/TextReadingTime";
import { useState } from "react";

function App() {
    let [text, setText] = useState("");
    let [excludeSpaces, setExcludeSpaces] = useState(false);
    let [characterLimit, setCharacterLimit] = useState(0);

    return (
        <>
            <header>
                <h1>Character Counter</h1>
            </header>
            <main>
                <h2>Analyze your text in real-time.</h2>
                <TextEntryForm
                    text={text}
                    setText={setText}
                    excludeSpaces={excludeSpaces}
                    setExcludeSpaces={setExcludeSpaces}
                    characterLimit={characterLimit}
                    setCharacterLimit={setCharacterLimit}
                />
                <TextReadingTime text={text} />
                <TextAttributeCounter
                    text={text}
                    excludeSpaces={excludeSpaces}
                />
                <TextDensityCounter text={text} />
            </main>
        </>
    );
}

export default App;
