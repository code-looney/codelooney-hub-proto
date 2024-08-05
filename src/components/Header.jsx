import React, { useContext } from 'react'
import Trademark from './Trademark'
import { AppContext } from './AppContext'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'
import Divider from './Divider'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    const context = useContext(AppContext);

  return (
    <header className='w-full flex h-[130px] justify-between items-center tracking-widest relative'>
    <div className='relative w-full items-center z-40 pl-[1.5em] flex'>
        <Link className='w-full'><span className='uppercase text-xl w-full font-bold text-[#00df9a]'>Code Looney</span></Link>
        <hr className='w-full translate-x-32 hidden absolute' />
    </div>
    <div className='w-[187.5px] flex justify-end items-center right-0 top-0 pr-[1.5em] md:hidden'>
        <Link onClick={() => context.handleToggleMobileMenu()}><img src="/images/icon-hamburger.svg" alt="hamburger open icoon" /></Link>
    </div>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex'>
        {context.router && context.router.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] text-white rounded-xl cursor-pointer duration-300 hover:text-black'
          >
            {item.page}
          </li>
        ))}
      </ul>

</header>
  )
}

export default Header