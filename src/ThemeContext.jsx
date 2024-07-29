import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("bg-[#1D2A35]"); // bring back to white
    const [routes, setRoutes] = useState(null);
    const [dark, setDark] = React.useState(false);


    const toggleTheme = () => {
        setTheme((prevTheme) => 
            prevTheme === "bg-white" ? "bg-[#1D2A35]" : "bg-white"
        );
    };

    const headerTheme = theme === "bg-white" ? "bg-white" : "bg-black"; // testing

    const value = {
        theme,
        headerTheme,
        toggleTheme,
        routes,
        setRoutes,
        dark,
        setDark
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
