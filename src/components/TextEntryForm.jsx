import "./styles/textEntryForm.css";

export default function TextEntryForm({
    className,
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
    characterLimit,
    setCharacterLimit,
}) {
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
            <label>
                <input
                    type="checkbox"
                    onChange={() => setExcludeSpaces(!excludeSpaces)}
                />
                Exclude Spaces
            </label>
            <label>
                <input
                    type="checkbox"
                    onChange={() => setCharacterLimit(characterLimit++)}
                />
                Set Character Limit
            </label>
        </form>
    );
}
