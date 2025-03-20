import "./App.css";
import Header from "./components/Header";
import TextAttributeCounter from "./components/TextAttributeCounter";
import TextDensityCounter from "./components/TextDensityCounter";
import TextEntryForm from "./components/TextEntryForm";
import TextReadingTime from "./components/TextReadingTime";
import { useEffect, useState } from "react";

function App() {
    let [text, setText] = useState("");
    let [excludeSpaces, setExcludeSpaces] = useState(false);
    let [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "light") {
            document.body.setAttribute("class", "theme-light");
        } else {
            document.body.setAttribute("class", "theme-dark");
        }
    }, [theme]);

    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <main className="pageMain">
                <h2>Analyze your text in real-time.</h2>
                <section className="formAndReadingTime">
                    <TextEntryForm
                        className="formAndReadingTime__form"
                        text={text}
                        setText={setText}
                        excludeSpaces={excludeSpaces}
                        setExcludeSpaces={setExcludeSpaces}
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
        </>
    );
}

export default App;
