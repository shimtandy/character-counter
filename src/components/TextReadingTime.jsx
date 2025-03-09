export default function TextReadingTime({ text }) {
    // Roughly the average reading speed of an adult.
    const READING_SPEED = 250; // words per minute

    const wordCount = text.split(" ").length;
    const readingTime = Math.ceil(wordCount / READING_SPEED);

    return (
        <section>
            Approx. reading time:{" "}
            {readingTime === 1 ? "< 1 minute." : `< ${readingTime} minutes.`}
        </section>
    );
}
