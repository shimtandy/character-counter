import "./styles/textEntryForm.css";

export default function TextEntryForm({
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
    characterLimit,
    setCharacterLimit,
}) {
    return (
        <form className="textEntryForm">
            <label>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <span>Enter text to be analyzed</span>
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
