import { useState } from "react";
import LetterDensityItem from "./LetterDensityItem";
import "./styles/textDensityCounterStyles.css";

export default function TextDensityCounter({ text }) {
    let [showAll, setShowAll] = useState(false);

    let letterCounts = {};

    // TODO: read into iterators
    for (let letter of text.matchAll(/[a-z]/gi)) {
        letter = letter[0].toUpperCase();

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

            {showAll && sortedLetters.length > 5 ? (
                <>
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
                    <button onClick={() => setShowAll(false)}>Show less</button>
                </>
            ) : (
                <>
                    <ol>
                        {sortedLetters.slice(0, 5).map(([letter, count]) => (
                            <LetterDensityItem
                                key={letter}
                                letter={letter}
                                count={count}
                                countPercent={(100 * count) / totalLetters}
                            />
                        ))}
                    </ol>
                    <button onClick={() => setShowAll(true)}>Show more</button>
                </>
            )}
        </section>
    );
}
