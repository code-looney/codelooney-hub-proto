import React, { useContext } from 'react'
import Trademark from './Trademark'
import { ThemeContext } from '../ThemeContext'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'


const Header = () => {
    const context = useContext(ThemeContext);
    console.log(context)

  return (
    <header className={`flex w-full items-center break-all`}>
      <Trademark className='p-4 text-lg md:text-3xl w-full md:w-auto font-bold text-[#00df9a]'>CODE LOONEY</Trademark>
      <ThemeToggle className="w-auto text-yellow-600 items-center md:hidden flex"  />
      <Navbar />
      <ThemeToggle className="w-auto text-yellow-600 md:flex items-center hidden"  />
    </header>
  )
}

export default Header