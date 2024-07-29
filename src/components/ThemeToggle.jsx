// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React, { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../ThemeContext";
// import { IconContext } from "react-icons";

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    console.log(context)

    const darkModeHandler = () => {
        context.setDark(!context.dark);
        document.body.classList.toggle("bg-black");
    }

    return (
        <div className="w-auto text-yellow-600 flex items-center">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    context.dark && <IoSunny className="text-[1.25rem]" />
                }
                {
                    !context.dark && <IoMoon className="text-[1.25rem]" />
                }
            </button>
        </div>
    );
}

export default ThemeToggle