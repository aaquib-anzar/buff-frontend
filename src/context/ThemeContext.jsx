import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
    },[darkMode])

    const toggleDarkMode = () => {setDarkMode((prev) => !prev)}

    return(
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}