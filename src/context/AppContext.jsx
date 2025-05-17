import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [activeOnglet, setActiveOnglet] = useState('accueil');
    const saveTheme = localStorage.getItem('theme');
    let isDarkSys = false;

    if (saveTheme) {
        isDarkSys = saveTheme === 'dark';
    } else {
        isDarkSys = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const [isDark, setIsDark] = useState(isDarkSys);
    const toggleMode = () => {
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        setIsDark((prev) => !prev);
    };

    return (
        <AppContext.Provider value={{
            activeOnglet,
            setActiveOnglet,
            isDark, toggleMode
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => useContext(AppContext); 