import React, { useContext, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Transition } from '@headlessui/react';
import { AppContext } from './AppContext';

const Navbar = () => {
  const context = useContext(AppContext); // Assuming theme is used for some purpose

  const navItems = [
    { name: 'TakeOff', href: '#', id: 1 },
    { name: 'Coach', href: '#', id: 2 },
    { name: 'Projects', href: '#', id: 3 },
    { name: 'Contact', href: '#', id: 4 },
  ];

  return (
      {}
  );
};

export default Navbar;
