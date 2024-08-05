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
            <div className={`flex-col md:hidden fixed right-0 top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#0000001f] ease-in-out duration-500
              ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }
               text-white backdrop-blur-xl z-40 bg-white/5`}>
                {/* zoek een oplossing om de menu te sluiten wanneer md bereikt */}
                <ul className='transition duration-300 ease-in-out '>
                    <li className='h-[130px] flex justify-end items-center pr-[1.5em] '>
                        <button aria-expanded={context.toggleMobileMenu}  onClick={context.handleToggleMobileMenu}>
                            <img className='w-[24px]' src={`/images/icon-close.svg`} alt="menu sluit icoon" />
                        </button>
                    </li>
                    {context.router && context.router.map(route => (
                        <li key={route.id} className={`p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600
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