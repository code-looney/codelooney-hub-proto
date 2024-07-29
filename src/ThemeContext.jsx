import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(""); // bring back to white
    const [routes, setRoutes] = useState(null);
    const [dark, setDark] = useState(false);
    const [fontColor, setFontColor] = useState("");


    // const handleheaderFontColor = () => {
    //     setFontColor((prevTheme) => 
    //         prevTheme === "text-red-600" ? "text-white" : "text-red-600"
    //     );
    // };


    // const headerTheme = theme === "bg-white" ? "bg-white" : "bg-black"; // testing
    // const headerFontColor = handleheaderFontColor;

    const value = {
        theme,
        // toggleTheme,
        routes,
        setRoutes,
        dark,
        setDark,
        fontColor,
        setFontColor,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
