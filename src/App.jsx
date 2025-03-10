import "./App.css";
import Header from "./components/Header";
import TextAttributeCounter from "./components/TextAttributeCounter";
import TextDensityCounter from "./components/TextDensityCounter";
import TextEntryForm from "./components/TextEntryForm";
import TextReadingTime from "./components/TextReadingTime";
import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
    let [text, setText] = useState("");
    let [excludeSpaces, setExcludeSpaces] = useState(false);
    let [characterLimit, setCharacterLimit] = useState(0);
    let [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <Header setTheme={setTheme} />
            <main className="pageMain">
                <h2>Analyze your text in real-time.</h2>
                <section className="formAndReadingTime">
                    <TextEntryForm
                        className="formAndReadingTime__form"
                        text={text}
                        setText={setText}
                        excludeSpaces={excludeSpaces}
                        setExcludeSpaces={setExcludeSpaces}
                        characterLimit={characterLimit}
                        setCharacterLimit={setCharacterLimit}
                    />
                    <TextReadingTime
                        className="formAndReadingTime__readingTime"
                        text={text}
                    />
                </section>
                <TextAttributeCounter
                    text={text}
                    excludeSpaces={excludeSpaces}
                />
                <TextDensityCounter text={text} />
            </main>
        </ThemeContext.Provider>
    );
}

export default App;
