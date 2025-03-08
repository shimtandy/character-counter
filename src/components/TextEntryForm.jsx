export default function TextEntryForm() {
    return (
        <form>
            <label>
                <textarea></textarea>
                <span>Text to be analyzed</span>
            </label>
            <label>
                <input type="checkbox" />
                Exclude Spaces
            </label>
            <label>
                <input type="checkbox" />
                Set Character Limit
            </label>
        </form>
    );
}
