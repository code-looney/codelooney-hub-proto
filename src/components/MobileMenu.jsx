import React, { useContext, useRef, useEffect } from 'react';
import { AppContext } from './AppContext';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const MobileMenu = () => {
    const context = useContext(AppContext);
    const menuRef = useRef(null);

    const handleDropdownClick = (id) => {
        context.setDropdownOpen(prev => (prev === id ? null : id));
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            context.handleToggleMobileMenu();
        }
    };

    useEffect(() => {
        if (context.toggleMobileMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [context.toggleMobileMenu]);

    return (
        <Transition
            show={context.toggleMobileMenu}
            enter="transition-transform duration-700 ease-in-out"
            enterFrom="transform translate-x-full opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            leave="transition-transform duration-700 ease-in-out"
            leaveFrom="transform translate-x-0 opacity-100"
            leaveTo="transform translate-x-full opacity-0"
            className={`flex-col md:hidden fixed right-0 py-7 top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#0000008a] ease-in-out duration-500 text-white backdrop-blur-xl z-40`}
        >
            <div ref={menuRef} className={`flex-col md:hidden fixed right-0 py-7 top-0 w-[50%] h-full border-l border-l-gray-900 bg-[#0000001f] text-white backdrop-blur-xl z-40
                ${context.toggleMobileMenu === false ? `transition transform duration-700 ease-in-out translate-x-0 opacity-100` : "" }`}>
                <ul className="flex flex-col h-full">
                    <li className='flex justify-end items-center px-4'>
                        <button aria-expanded={context.toggleMobileMenu} onClick={context.handleToggleMobileMenu}>
                            <img className='w-[24px]' src={`/images/icon-close.svg`} alt="Close menu icon" />
                        </button>
                    </li>
                    {context.router && context.router.map(route => (
                        <React.Fragment key={route.id}>
                            <li className={`border-b rounded-xl list-none hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600
                                ${context.hoverUnderlineColor === route.id ? 'border-r-white' : 'border-r-transparent'}`}>
                                <NavLink
                                    onClick={() => handleDropdownClick(route.id)}
                                    to={route.path} // Ensure 'route.path' is defined
                                    className="flex gap-3 rounded-xl p-4 text-[14px] font-barlowCondensed"
                                >
                                    <span className='font-bold'>{route.order}</span>
                                    {route.page !== "to one coaching call" && route.page}
                                    {route.page === "Coaching" && (
                                        <span className={`transition-transform duration-300 ${context.dropdownOpen === route.id ? 'rotate-180' : 'rotate-0'}`}>
                                            {"▼"}
                                        </span>
                                    )}
                                </NavLink>
                            </li>
                            {route.page === "Coaching" && context.dropdownOpen === route.id && (
                            <Transition
                                    show={context.dropdownOpen}
                                    enter="transition-all duration-300 ease-in-out"
                                    enterFrom="opacity-0 max-h-0"
                                    enterTo="opacity-100 max-h-[500px]"
                                    leave="transition-all duration-300 ease-in-out"
                                    leaveFrom="opacity-100 max-h-[500px]"
                                    leaveTo="opacity-0 max-h-0"
                                >
                                    <div className="border-b border-gray-600 ">
                                        <NavLink
                                            to="/one-to-one-coaching-call"
                                            className="block border border-gray-600 rounded-xl p-4 ml-5 text-[.8rem] font-barlowCondensed hover:bg-[#00df9a] hover:text-black"
                                        >
                                            1 To 1 Call
                                        </NavLink>
                                    </div>
                                </Transition>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </Transition>
    );
};

export default MobileMenu;
