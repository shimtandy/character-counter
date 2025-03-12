import darkLogo from "/images/logo-dark-theme.svg";
import lightLogo from "/images/logo-light-theme.svg";
import sunIcon from "/images/icon-sun.svg";
import moonIcon from "/images/icon-moon.svg";
import "./styles/header.css";

export default function Header({ theme, setTheme }) {
    let buttonImgSrc = null;
    let logoImgSrc = null;

    if (theme === "light") {
        buttonImgSrc = moonIcon;
        logoImgSrc = lightLogo;
    } else if (theme === "dark") {
        buttonImgSrc = sunIcon;
        logoImgSrc = darkLogo;
    }

    return (
        <header className="pageHeader">
            <img src={logoImgSrc} alt="Logo" />

            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                <img src={buttonImgSrc} alt="Light theme" />
            </button>
        </header>
    );
}
