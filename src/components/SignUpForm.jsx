import React, { useContext, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { AppContext } from './AppContext';
import { useForm, ValidationError } from '@formspree/react';
import MainTitle from './MainTitle';

const SignUpForm = () => {
    const context = useContext(AppContext);
    const [state, handleSubmit] = useForm("xyzgjeln");
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (context.open) {
            const timer = setTimeout(() => setShowButton(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowButton(false);
        }
    }, [context.open]);

    if (state.succeeded) {
        return (
            <Transition show={context.open === true}>
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-500 ease-out">
                    <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
                    <div className="relative z-10 w-[420px] h-[420px] p-8 bg-gradient-to-br from-black to-gray-800 border border-green-700 rounded-lg shadow-xl transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105">
                        <div className="flex flex-col h-full justify-center items-center">
                            <div className="text-center mb-4">
                                <h1 className="text-3xl font-extrabold text-green-500 animate-bounce">
                                    Life as you know it will never be the same!
                                </h1>
                            </div>
                            <p className="text-gray-300 text-lg text-center mb-6">
                                Embrace the <span className='font-bold uppercase'>whatever it takes</span> and let the Quest begin. Are you ready for your transformation?
                            </p>
                            <div className='flex gap-4'>
                                <button
                                    className={`transition-all duration-300 ease-in-out bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-3xl font-bold px-6 py-3`}
                                    onClick={() => context.setOpen((open) => !open)}
                                >
                                    Blue Pill
                                </button>
                                <button
                                    className={`transition-all duration-300 ease-in-out bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-3xl font-bold px-6 py-3`}
                                    onClick={() => context.setOpen((open) => !open)}
                                >
                                    Red Pill
                                </button>
                            </div>
                            <div className="mt-4 flex gap-2 items-center">
                                <button
                                    className="text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                    onClick={() => alert('Choose wisely:\n\nBlue Pill: Remain in your current reality.\nRed Pill: See how deep the rabbit hole goes.')}
                                >
                                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z"/>
                                    </svg>
                                </button>
                                <span className="text-gray-300 text-sm">What do they mean?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        );
    }

    return (
        <Transition show={context.open === true}>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-500 ease-out">
                <div className="absolute inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
                <div className="relative z-10 w-[400px] h-[400px] p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-red-700 rounded-lg shadow-xl">
                    <button
                        className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl"
                        onClick={() => context.setOpen((open) => !open)}
                    >
                        X
                    </button>
                    <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
                        <label htmlFor="email" className="text-2xl font-semibold mb-4 text-center text-white uppercase">Register today!</label>
                        <div className="mb-4 flex flex-col gap-1">
                            <label htmlFor="email" className="block text-gray-300">Your Email:</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <div className="mb-4 flex flex-col gap-1">
                            <label htmlFor="option" className="block text-gray-300">Select your area of interest:</label>
                            <select
                                id="option"
                                type="option"
                                name="option"
                                required
                                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <button type="submit" disabled={state.submitting} className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Submit</button>
                    </form>
                </div>
            </div>
        </Transition>
    );
};

export default SignUpForm;