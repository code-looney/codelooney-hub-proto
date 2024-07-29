import React, { useContext } from 'react'
import Trademark from './Trademark'
import { ThemeContext } from '../ThemeContext'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'


const Header = () => {
    const context = useContext(ThemeContext);

  return (
    <header className="flex w-full items-center ju bg-black">
      <Trademark className='p-4 text-3xl w-full md:w-auto font-bold text-[#00df9a]'>CODE LOONEY</Trademark>
      <Navbar />
      <ThemeToggle />
    </header>
  )
}

export default Header