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

    const charCount =
        characters.length > 0 && characters.length < 10
            ? `0${characters.length}`
            : characters.length;

    const wordCount =
        words.length > 0 && words.length < 10
            ? `0${words.length}`
            : words.length;

    const sentenceCount =
        sentences.length > 0 && sentences.length < 10
            ? `0${sentences.length}`
            : sentences.length;

    return (
        <ol className="countsList">
            <li className="charCount">
                <span className="countsList__num">{charCount}</span> Characters
            </li>
            <li className="wordCount">
                <span className="countsList__num">{wordCount}</span> Word Count
            </li>
            <li className="sentenceCount">
                <span className="countsList__num">{sentenceCount}</span>{" "}
                Sentence Count
            </li>
        </ol>
    );
}
