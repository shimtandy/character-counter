import darkLogo from "/images/logo-dark-theme.svg";
import lightLogo from "/images/logo-light-theme.svg";
import sunIcon from "/images/icon-sun.svg";
import moonIcon from "/images/icon-moon.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header({ setTheme }) {
    let theme = useContext(ThemeContext);
    return (
        <header>
            <img src={lightLogo} alt="Logo" />

            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <img src={moonIcon} alt="Light theme" />
            </button>
        </header>
    );
}
