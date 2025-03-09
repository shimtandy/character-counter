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

    return (
        <section>
            <h3>Letter Density</h3>
            <ol>
                {sortedLetters.map(([letter, count]) => (
                    <li key={letter}>
                        {letter}: {count}
                    </li>
                ))}
            </ol>
        </section>
    );
}
