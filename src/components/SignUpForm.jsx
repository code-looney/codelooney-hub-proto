import React, { useContext, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { AppContext } from './AppContext';
import { ValidationError } from '@formspree/react';

const SignUpForm = () => {
    const context = useContext(AppContext);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        if (context.open) {
            const timer = setTimeout(() => setShowButton(true), 300);
            return () => clearTimeout(timer);
        } else {
            setShowButton(false);
        }
    }, [context.open]);

    if (context.state.succeeded) {
        return (
            <Transition show={context.open === true}>
                <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center text-center justify-center transition-opacity duration-500 ease-out">
                    <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
                    <div className="relative z-10 w-[420px] h-[420px] p-8 bg-gradient-to-br from-black to-gray-800 border border-green-700 rounded-lg shadow-xl transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105">
                        <button
                            className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl"
                            onClick={() => context.setOpen(false)}
                        >
                            X
                        </button>
                        <div className="flex flex-col h-full justify-center items-center">
                            <h1 className="text-3xl font-extrabold text-green-500 animate-bounce mb-4">
                                JE PERFECT!
                            </h1>
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
                        onClick={() => context.setOpen(false)}
                    >
                        X
                    </button>
                    <form onSubmit={context.handleSubmit} className="h-full flex flex-col justify-center">
                        <label htmlFor="email" className="text-2xl font-semibold mb-4 text-center text-white uppercase">Laten we beginnen met...</label>
                        <div className="mb-4 flex flex-col gap-1">
                            <label htmlFor="email" className="block text-gray-300">Je Email:</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={context.state.errors}
                            />
                        </div>
                        <div className="mb-4 flex flex-col gap-1">
                            <label htmlFor="option" className="block text-gray-300">Je plan...</label>
                            <select
                                id="option"
                                type="option"
                                name="option"
                                required
                                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>Selecteer one...</option>
                                <option value="option1">Website</option>
                            </select>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={context.state.errors}
                            />
                        </div>
                        <button type="submit" disabled={context.state.submitting} className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Submit</button>
                    </form>
                </div>
            </div>
        </Transition>
    );
};

export default SignUpForm;
