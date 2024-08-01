import React, { useContext } from 'react'
import Trademark from './Trademark'
import { ThemeContext } from '../ThemeContext'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'
import Divider from './Divider'


const Header = () => {
    const context = useContext(ThemeContext);
    console.log(context)

  return (
    <header className={`flex w-full items-center break-all outline`}>
      <Trademark className='p-4 text-2xl md:text-3xl w-full md:w-auto font-bold text-[#00df9a]'>CODE LOONEY</Trademark>
      <ThemeToggle className="w-auto p-4 text-yellow-600 items-center md:hidden flex"  />
      <Divider className=" md:flex hidden items-center border-l border-slate-200  pl-6 dark:border-slate-800 rotate-90 " />
      <Navbar />
      <ThemeToggle className="w-auto text-yellow-600 md:flex items-center hidden"  />
    </header>
  )
}

export default Header