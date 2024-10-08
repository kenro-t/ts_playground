import { useTheme } from "../context/ThemeContext"

const Header = () => {
    const [theme, setTheme] = useTheme();
    const THEMES = ['light', 'dark', 'red'];
    const changeTheme = (e) => setTheme(e.target.value)

    return (
        <header className={`content-${theme}`}>
            {THEMES.map(_theme => (
            <label key={_theme}>
                <input type="radio"
                value={_theme}
                onChange={changeTheme}
                checked={_theme === theme}
                />
                {_theme}
            </label>
            ))}
        </header>
    );
};

export default Header;
