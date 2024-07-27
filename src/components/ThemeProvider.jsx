import React, {createContext} from "react";

const ThemeProvider = () => {
    const ThemeContext = createContext();

  return (
    <div>{children}</div>
  )
}

export default ThemeProvider