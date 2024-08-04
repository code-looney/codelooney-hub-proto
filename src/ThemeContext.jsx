import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {


    const value = {

    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
