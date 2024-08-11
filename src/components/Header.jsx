import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Header = (props) => {
    const context = useContext(AppContext);

    return (
        <header className='w-full flex justify-between items-center tracking-widest relative py-7'>
            <div className='relative items-center z-10 pl-[1.5rem] md:pl-[2rem] flex'>
                <Link className='w-full'>
                    <img className='uppercase md:w-60 w-40 font-bold text-[#00df9a]' src="public/images/Screenshot 2024-08-05 at 00-14-34 Code Looney.png" alt="logo" />
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
                        <li className={`${item.page === "1 to one call" ? "hidden" : item.page}`}>
                            <ul>
                                <li className='relative'>
                                    <div
                                        className=' hover:bg-[#00df9a] text-white rounded-xl cursor-pointer duration-300 hover:text-black flex items-center'
                                        onClick={() => item.page === "Coaching" && context.handleDropdownClick(item.id)}
                                    >
                                        <NavLink className="p-4" to={item.path}>{item.page}
                                        {item.page === "Coaching" && (
                                            <span className={`transition-transform duration-700 ml-2 ${context.dropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                                                {"▼"}
                                            </span>
                                        )}
                                        </NavLink>
                                    </div>
                                </li>
                                {item.page === "Coaching" && (
                                    <li className={`${context.dropdownOpen ? 'block' : 'hidden'} rounded-xl text-white absolute`}>
                                        <Transition
                                            show={context.dropdownOpen}
                                            enter="transition-all duration-300 ease-in-out"
                                            enterFrom="opacity-0 max-h-0"
                                            enterTo="opacity-100 max-h-[500px]"
                                            leave="transition-all duration-300 ease-in-out"
                                            leaveFrom="opacity-100 max-h-[500px]"
                                            leaveTo="opacity-0 max-h-0"
                                        >
                                            <div className="flex justify-center">
                                                <NavLink to="/one-to-one-coaching-call" className="block rounded-xl p-4 text-[14px] font-barlowCondensed hover:bg-[#00df9a] hover:text-black duration-300">
                                                    1 To 1 Coaching Call
                                                </NavLink>
                                            </div>
                                        </Transition>
                                    </li>
                                )}
                            </ul>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </header>
    );
}

export default Header;
