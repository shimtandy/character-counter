import { useState } from "react";
import "./styles/textEntryForm.css";

export default function TextEntryForm({
    className,
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
}) {
    let [characterLimit, setCharacterLimit] = useState(0);
    let [limitActive, setLimitActive] = useState(false);

    let limitReached = text.length > characterLimit;

    return (
        <form className={`textEntryForm ${className}`}>
            <label className="textEntryForm__entryLabel">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <span className="textEntryForm__label">
                    Enter text to be analyzed
                </span>
            </label>
            {limitReached && (
                <span>
                    Limit reached! Your text exceeds {characterLimit}{" "}
                    characters.
                </span>
            )}
            <label className="textEntryForm__checkbox">
                <input
                    type="checkbox"
                    onChange={() => setExcludeSpaces(!excludeSpaces)}
                />
                Exclude Spaces
            </label>
            <label className="textEntryForm__checkbox">
                <input
                    type="checkbox"
                    onChange={() => setLimitActive(!limitActive)}
                />
                Set Character Limit
            </label>
            {limitActive && (
                <label className="textEntryForm__charLimit">
                    <input
                        type="number"
                        onChange={(e) => setCharacterLimit(e.target.value)}
                    />
                </label>
            )}
        </form>
    );
}
