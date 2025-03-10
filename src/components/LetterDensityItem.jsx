import "./styles/letterDensityItemStyles.css";

export default function LetterDensityItem({ letter, count, countPercent }) {
    return (
        <li className="letterDensityItem">
            <span className="letterDensityItem__letter">{letter}</span>{" "}
            <progress
                className="letterDensityItem__progress"
                value={countPercent}
                max={100}
            />{" "}
            <div className="letterDensityItem__numbers">
                <span className="letterDensityItem__count">{count}</span>(
                <span>{countPercent.toFixed(2)}</span>
                %)
            </div>
        </li>
    );
}
