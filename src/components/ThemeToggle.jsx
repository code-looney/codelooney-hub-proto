// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
// import { IconContext } from "react-icons";

const ThemeToggle = () => {
    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div className="w-auto text-yellow-600 flex items-center">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny className="text-[1.25rem]" />
                }
                {
                    !dark && <IoMoon className="text-[1.25rem]" />
                }
            </button>
        </div>
    );
}

export default ThemeToggle