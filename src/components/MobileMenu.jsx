import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import OneToOneCoachingCall from './OneToOneCoachingCall';

const MobileMenu = () => {
    const context = useContext(AppContext);


    const handleDropdownClick = () => {
            context.setDropdownOpen(prev => !prev)
    }

    return (
        <Transition
          show={context.toggleMobileMenu}
          enter="transition-transform duration-700 ease-in-out"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition-transform duration-700 ease-in-out"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
          >
            <div className={`flex-col md:hidden fixed right-0 py-7 top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#0000001f] ease-in-out duration-500
              ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
               text-white backdrop-blur-xl z-40 bg-white/5`}>
                {/* zoek een oplossing om de menu te sluiten wanneer md bereikt */}
                <ul className='transition duration-300 ease-in-out '>
                    <li className='flex justify-end items-center pr-[1.5em] '>
                        <button aria-expanded={context.toggleMobileMenu}  onClick={context.handleToggleMobileMenu}>
                            <img className='w-[24px]' src={`/images/icon-close.svg`} alt="menu sluit icoon" />
                        </button>
                    </li>
                    {context.router && context.router.map(route => (
                        <React.Fragment key={route.id}>
                        <li className={` border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600
                            ${context.hoverUnderlineColor === route.id ? 'border-r-white' : 'border-r-transparent'}`}>
                            <NavLink to={`/${route.page === "Coaching" ? "" : route.page}`} onClick={() => handleDropdownClick(route.id)} 
                                className="flex gap-3 rounded-xl  p-4 justify-self-center text-[14px] font-barlowCondensed">
                                <span className='font-bold'>{route.order}</span>
                                {route.page} 
                                {route.page === "Coaching" ? <span className={`transition-transform duration-700 ${context.dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>{"▼"}</span> : ""}
                            </NavLink>
                        </li>
                        <li className={`${context.dropdownOpen}`}>
                        <Transition
                                show={context.dropdownOpen && route.page === "Coaching"}
                                enter="transition-all duration-300 ease-in-out"
                                enterFrom="opacity-0 max-h-0"
                                enterTo="opacity-100 max-h-[500px]"
                                leave="transition-all duration-300 ease-in-out"
                                leaveFrom="opacity-100 max-h-[500px]"
                                leaveTo="opacity-0 max-h-0"
                                    >
                            <div className={`${route.page === "Coaching" ? "flex justify-center" : null}`}>
                                <NavLink className="block rounded-xl p-4 text-[14px] font-barlowCondensed hover:bg-[#00df9a] hover:text-black duration-300" to={`/${route.page === "Coaching" ? "1-to-one-coaching-call" : null}`}>{route.page === "Coaching" ? "1 To 1 Coaching Call" : null}</NavLink>
                            </div>
                        </Transition>
                        </li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </Transition>
    );
}

export default MobileMenu;