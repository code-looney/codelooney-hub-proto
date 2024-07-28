import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("bg-[#1D2A35]"); // bring back to white
    const [routes, setRoutes] = useState(null);

    const toggleTheme = () => {
        setTheme((prevTheme) => 
            prevTheme === "bg-white" ? "bg-[#1D2A35]" : "bg-white"
        );
    };

    const headerTheme = theme === "bg-white" ? "bg-white" : "bg-black";

    const value = {
        theme,
        headerTheme,
        toggleTheme,
        routes,
        setRoutes
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
