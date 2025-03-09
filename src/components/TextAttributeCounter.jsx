import "./styles/textAttributeCounter.css";

export default function TextAttributeCounter({ text, excludeSpaces }) {
    const sentences = text
        .split(/[.!?]/)
        .filter((sentence) => sentence.trim().length > 0);
    const words = text.split(" ").filter((word) => word.length > 0);
    let characters = text.split("");

    if (excludeSpaces) {
        characters = characters.filter((char) => char !== " ");
    }

    return (
        <ol className="countsList">
            <li className="charCount">
                <span className="countsList__num">{characters.length}</span>{" "}
                Characters
            </li>
            <li className="wordCount">
                <span className="countsList__num">{words.length}</span> Word
                Count
            </li>
            <li className="sentenceCount">
                <span className="countsList__num">{sentences.length}</span>{" "}
                Sentence Count
            </li>
        </ol>
    );
}
