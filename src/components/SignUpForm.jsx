import React, { useContext, useState } from 'react';
import { Transition } from '@headlessui/react';
import { AppContext } from './AppContext';
import { useForm, ValidationError } from '@formspree/react';

const SignUpForm = () => {
    const context = useContext(AppContext)
    const [state, handleSubmit] = useForm("xyzgjeln");

    if (state.succeeded) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <p className='text-red-600'>Thanks for joining!</p>
        </div>;
    }

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
        <form onSubmit={handleSubmit}  className="text-center">
            <label htmlFor="email" className="text-2xl font-semibold mb-4 uppercase">Register today!</label>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email:</label>
                <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="option" className="block text-gray-700 mb-2">Select your area of ​​interest:</label>
                <select
                id="option"
                type="option"
                name="option"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <option value="" disabled>Select one...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                </select>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
    </form>
            </div>
        </div>
    </Transition>
  );
};

export default SignUpForm;
