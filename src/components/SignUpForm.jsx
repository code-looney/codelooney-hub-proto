import React, { useContext, useState } from 'react';
import { Transition } from '@headlessui/react';
import { AppContext } from './AppContext';

const SignUpForm = () => {
    const context = useContext(AppContext)


  return (
        <Transition show={context.open === true}>
        <div className="absolute z-50 top w-full h-full bg-black bg-opacity-80 bg-boa  flex items-center justify-center transition duration-300 ease-in data-[closed]:opacity-0">
        <div className="absolute inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
        <div className="relative z-10 w-[400px] h-[400px] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <button
            className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl"
            onClick={() => context.setOpen((open) => !open)}
            >
            X
            </button>
            <form onSubmit={context.handleSubmit} className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Register today!</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email:</label>
                <input
                type="email"
                id="email"
                value={context.email}
                onChange={context.handleEmailChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="option" className="block text-gray-700 mb-2">Select your area of ​​interest:</label>
                <select
                id="option"
                value={context.option}
                onChange={context.handleOptionChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="" disabled>Select one...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
                Submit
            </button>
            </form>
            </div>
        </div>
    </Transition>
  );
};

export default SignUpForm;
