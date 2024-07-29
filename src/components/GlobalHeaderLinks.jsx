import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { IoIosArrowDown } from "react-icons/io";

const GlobalHeaderLinks = (props) => {

    const {...rest} = props;
    const [hide, setHide] = useState("hidden")

    const context = useContext(ThemeContext);
 
  return (
    <div className='flex gap-5 h-10 items-center'>
      {context.routes && context.routes.map(route => {
        return (
          <div key={route.id}>
          {/* {console.log(route.dropdown?.[0].page)} */} 
          <NavLink onMouseEnter={() => setHide("block")} onMouseLeave={() => setHide("hidden")} className={`flex gap-2 items-end relative`}>
            {route.page} {route.page === "Coach" ? 
            <IoIosArrowDown
            className='text-[24px] absolute  text-[#E21134] right-0 translate-x-7 hover:rotate-180 duration-300 ' /> : null}
          </NavLink>
          <NavLink onMouseEnter={() => setHide("block")} onMouseLeave={() => setHide("hidden")}
          className={`${route.id === (3) ? "block" : "hidden"} absolute ${hide} px-5 bg-black`}>
            {route.dropdown?.[0].page}</NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default GlobalHeaderLinks