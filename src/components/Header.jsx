import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Header = (props) => {
    const context = useContext(AppContext);

    return (
        <header className='w-full flex justify-between items-center tracking-widest relative py-7'>
            <div className='relative w-full items-center z-10 pl-[1.5rem] md:pl-[2rem] flex'>
                <Link className='w-full'>
                    <span className='uppercase text-xl w-full font-bold text-[#00df9a]'>Code Looney</span>
                </Link>
            </div>
            <div className='w-[187.5px] flex justify-end items-center right-0 top-0 pr-[1.5rem] md:hidden'>
                <Link onClick={context.handleToggleMobileMenu}>
                    <img src="/images/icon-hamburger.svg" alt="hamburger open icon" />
                </Link>
            </div>
            {/* Desktop Navigation */}
            <ul className='hidden md:flex md:pr-[1rem] w-full justify-end '>
                {context.router && context.router.map(item => (
                    <React.Fragment key={item.id}>
                       <li>
                        <ul>
                        <li className='relative'>
                            <div
                                className='p-4 hover:bg-[#00df9a] text-white rounded-xl cursor-pointer duration-300 hover:text-black flex items-center'
                                onClick={() => item.page === "Coaching" && context.handleDropdownClick(item.id)}
                            >
                                {item.page}
                                {item.page === "Coaching" && (
                                    <span className={`transition-transform duration-700 ml-2 ${context.dropdownOpen === item.id ? 'rotate-180' : 'rotate-0'}`}>
                                        {"▼"}
                                    </span>
                                )}
                            </div>
                        </li>
                        <li className={`${context.dropdownOpen} bg-red-600 absolute`}>
                        <Transition
                                show={context.dropdownOpen && item.page === "Coaching"}
                                enter="transition-all duration-300 ease-in-out"
                                enterFrom="opacity-0 max-h-0"
                                enterTo="opacity-100 max-h-[500px]"
                                leave="transition-all duration-300 ease-in-out"
                                leaveFrom="opacity-100 max-h-[500px]"
                                leaveTo="opacity-0 max-h-0"
                                    >
                            <div className={`${item.page === "Coaching" ? "flex justify-center" : null}`}>
                                <NavLink className="block rounded-xl p-4 text-[14px] font-barlowCondensed hover:bg-[#00df9a] hover:text-black duration-300" to={`/${item.page === "Coaching" ? "1-to-one-coaching-call" : null}`}>{item.page === "Coaching" ? "1 To 1 Coaching Call" : null}</NavLink>
                            </div>
                        </Transition>
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
