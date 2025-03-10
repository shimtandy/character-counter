import LetterDensityItem from "./LetterDensityItem";
import "./styles/textDensityCounterStyles.css";

export default function TextDensityCounter({ text }) {
    let letterCounts = {};

    for (let letter of text.matchAll(/[a-z]/gi)) {
        if (letter in letterCounts) {
            letterCounts[letter]++;
        } else {
            letterCounts[letter] = 1;
        }
    }

    // Sorted descending by count.
    const sortedLetters = Object.entries(letterCounts).sort(
        ([, a], [, b]) => b - a
    );

    const totalLetters = sortedLetters.reduce(
        (accumulator, currentValue) => accumulator + currentValue[1],
        0
    );

    return (
        <section className="textDensity">
            <h3>Letter Density</h3>
            <ol>
                {sortedLetters.map(([letter, count]) => (
                    <LetterDensityItem
                        key={letter}
                        letter={letter}
                        count={count}
                        countPercent={(100 * count) / totalLetters}
                    />
                ))}
            </ol>
        </section>
    );
}
