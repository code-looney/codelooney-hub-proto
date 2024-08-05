import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const MobileMenu = () => {
    const context = useContext(AppContext);
    console.log(context.toggleMobileMenu)

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
            <div className={`flex-col w-[200px] h-full right-0 top-0 absolute
              ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
               text-white backdrop-blur-xl z-40 bg-white/5`}>
                <ul className='h-full w-full flex flex-col gap-[2em]'>
                    <li className='h-[88px] flex justify-end items-center pr-[1.5em]'>
                        <button aria-expanded={context.toggleMobileMenu}  onClick={context.handleToggleMobileMenu}>
                            <img className='w-[24px]' src={`public/images/icon-close.svg`} alt="menu icon" />
                        </button>
                    </li>
                    {context.router && context.router.map(route => (
                        <li key={route.id} className={`pl-[2em] flex uppercase tracking-[0.125em] border-r-4 gap-3 hover:border-opacity-50 ease-in-out duration-700 hover:border-r-white 
                            ${context.hoverUnderlineColor === route.id ? 'border-r-white' : 'border-r-transparent'}`}>
                            <NavLink onClick={() => context.handleNavLinkHover(route.id)} 
                                className="flex gap-3 justify-self-center text-[14px] font-barlowCondensed">
                                <span className='font-bold'>{route.order}</span>
                                {route.page}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </Transition>
    );
}

export default MobileMenu;