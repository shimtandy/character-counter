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
        <ol>
            <li>{characters.length} Characters</li>
            <li>{words.length} Word Count</li>
            <li>{sentences.length} Sentence Count</li>
        </ol>
    );
}
