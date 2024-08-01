import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Divider from './Divider';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const context = useContext(ThemeContext);
  const [navItemsHidden, setNavItemsHidden] = useState("hidden");
  
  console.log(context.dark)

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
    setNavItemsHidden(navItemsHidden === "hidden" ? "block" : "hidden")
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'TakeOff' },
    { id: 2, text: 'Coach' },

  ];

  return (
    <div className={`flex justify-start md:justify-between items-center p-4 ${context.dark === false ? "text-red-600" : "text-white"}`}>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-5 items-center'>
        {navItems.map(item => (
          <li
            key={item.id}
            className=' hover:bg-[#00df9a] text-[1rem] rounded-xl cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden w-full'>
        {nav ? <AiOutlineClose className='w-full' size={30} /> : <AiOutlineMenu className='w-full' size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav 
          ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]' 
          : 'e fixed top-0 bottom-0 left-[-100%]'
        } 
      >
        {/* Mobile Logo */}
        <h1 className={`w-full text-2xl md:text-3xl font-bold ${navItemsHidden} w-full text-[#00df9a] m-4`}>CODE LOONEY</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 border-b ${navItemsHidden} rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600`
            }>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar