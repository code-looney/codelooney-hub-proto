import React, { useContext, useState } from 'react';
import { AppContext } from './AppContext';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Header = () => {
    const context = useContext(AppContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <header className='w-full flex justify-between items-center tracking-widest relative py-7'>
            <div className='relative items-center z-10 pl-[1.5rem] md:pl-[2rem] flex'>
                <Link to="/" className='w-full'>
                    <img className='uppercase md:w-60 w-40 font-bold text-[#00df9a]' src="/images/Screenshot 2024-08-05 at 00-14-34 Code Looney.png" alt="logo" />
                </Link>
            </div>
            <div className='w-[187.5px] flex justify-end items-center right-0 top-0 pr-[1.5rem] md:hidden'>
                <Link onClick={context.handleToggleMobileMenu}>
                    <img src="/images/icon-hamburger.svg" alt="hamburger open icon" />
                </Link>
            </div>
            {/* Desktop Navigation */}
            <ul className='hidden md:flex md:pr-[1rem] w-full justify-end'>
                {context.router && context.router.map(item => (
                    <React.Fragment key={item.id}>
                        <li className={`relative ${item.page === "1 to one coaching call" ? "hidden" : item.page}`}>
                            <ul>
                                <li
                                    className='relative group'
                                    onMouseEnter={item.page === "Coaching"? handleMouseEnter : false}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        className='hover:bg-[#00df9a] text-white rounded-xl cursor-pointer duration-300 hover:text-black flex items-center'
                                    >
                                        <NavLink className="p-4 flex items-center w-full" to={item.path}>
                                            {item.page}
                                            {item.page === "Coaching" && (
                                                <span className={`transition-transform duration-300 ml-2 
                                                ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} inline-block transform`}
                                                >
                                                    {"▼"}
                                                </span>
                                            )}
                                        </NavLink>
                                    </div>
                                    {item.page === "Coaching" && (
                                        <Transition
                                            show={isDropdownOpen} // Control visibility based on state
                                            enter="transition-opacity duration-300 ease-in-out"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity duration-300 ease-in-out"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className='absolute top-full left-0 w-full bg-gray-800 rounded-xl'>
                                                <NavLink to="/one-to-one-coaching-call" className="block border border-1 border-gray-600 rounded-xl p-4 text-[14px] font-barlowCondensed hover:bg-[#00df9a] hover:text-black duration-300 text-center">
                                                    1 to one call
                                                </NavLink>
                                            </div>
                                        </Transition>
                                    )}
                                </li>
                            </ul>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </header>
    );
}

export default Header;
