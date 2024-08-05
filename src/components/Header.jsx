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
    <header className='w-full h-[88px] flex justify-between items-center tracking-widest relative outline'>
    <div className='relative gap-[64px] items-center z-40 lg:min-w-[160px] pl-[1.5em] flex'>
        <Link className='w-full'><span className='uppercase text-2xl w-full font-bold text-[#00df9a]'>Code Looney</span></Link>
        <hr className='w-full translate-x-32 hidden absolute' />
    </div>
    <div className=' h-[40px] w-[187.5px] flex justify-end items-center right-0 top-0 pr-[1.5em] '>
        <Link onClick={() => context.handleToggleMobileMenu()}><img src="public/images/icon-hamburger.svg" alt="hamburger icon" /></Link>
    </div>
    <ul className='h-full flex-row justify-end z-10 items-center pr-[3em] hidden gap-[3em] text-[1rem] relative text-white uppercase'>
    <li className=' w-full hidden'>
    <hr className='w-full text-[#979797] hidden' />
    </li>
      {context.router && context.router.map(route => {
        return (
          <li key={route.id} className={`h-full items-center flex-col justify-center relative z-20 border-b-4 flex gap-3 ${context.hoverUnderlineColor === route.id ? null : "hover:border-opacity-50 "} ease-in-out duration-700 hover:border-b-white 
          ${context.hoverUnderlineColor === route.id ? 'border-b-white' : 'border-b-transparent'}`}>
          <NavLink to={`/`}
              onClick={() => context.handleNavLinkHover(route.id)}
              className={`flex gap-3`}>
              {/* <span className={`font-bold`}></span>  */}
              <span className={`${route.order === "00" ? "hidden" : ""} ${route.order === "00" ? "xl:block" : ""}`}>{route.order}</span>
            {route.page}
              </NavLink>
          </li>
        )
      })}
    </ul>
</header>
  )
}

export default Header