// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React, { useContext } from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from "../ThemeContext";
// import { IconContext } from "react-icons";

const ThemeToggle = (props) => {
    const {...rest} = props;
    const context = useContext(ThemeContext);
    document.body.classList.add("bg-black")
    console.log(context)

    const darkModeHandler = () => {
        context.setDark(!context.dark);
        if ("bg-black" === "bg-black") {
            document.body.classList.toggle("bg-white")
        };
    }

    return (
        <div {...rest}>
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