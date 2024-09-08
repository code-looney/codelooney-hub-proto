import React, { useContext, useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(AppContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setSuccessMessage('');
    //     setErrorMessage('');

    //     try {
    //         const response = await fetch('/api/send-message', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             setSuccessMessage('Je bericht is succesvol verzonden!');
    //             setFormData({ name: '', email: '', message: '' });
    //         } else {
    //             setErrorMessage('Er is iets misgegaan. Probeer het later opnieuw.');
    //         }
    //     } catch (error) {
    //         setErrorMessage('Er is iets misgegaan. Probeer het later opnieuw.');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <div className='bg-black text-green-500 min-h-screen flex flex-col'>
            <Header />
            <MobileMenu />
            <main className='flex flex-col items-center justify-center flex-1 p-6'>
                <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-4xl w-full'>
                    <div className='p-6'>
                        <h1 className='text-3xl font-extrabold mb-4'>Contact</h1>
                        <p className='text-gray-300 mb-6'>
                            We horen graag van je! Vul het onderstaande formulier in of neem contact met ons op via de onderstaande gegevens.
                        </p>

                        {/* Contact Formulier */}
                        <form onSubmit={context.handleSubmit} className='bg-gray-900 p-6 rounded-lg'>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-300'>
                                    Volledige Naam
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                                    required
                                />
                            </div>

                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-300'>
                                    E-mail Adres
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                                    required
                                />
                            </div>

                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-300'>
                                    Bericht
                                </label>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows='4'
                                    className='w-full bg-gray-800 text-gray-100 rounded-lg border border-gray-700 py-2 px-3'
                                    required
                                ></textarea>
                            </div>

                            {successMessage && (
                                <p className='text-green-500 mb-4'>{successMessage}</p>
                            )}
                            {errorMessage && (
                                <p className='text-red-500 mb-4'>{errorMessage}</p>
                            )}

                            <button
                                type='submit'
                                disabled={context.state.submitting}
                                className='bg-green-600 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
                            >
                                {context.submitting ? 'Verzenden...' : 'Verstuur Bericht'}
                            </button>
                        </form>

                        {/* Contactinformatie */}
                        <div className='mt-8'>
                            <h2 className='text-2xl font-bold mb-4'>Contactinformatie</h2>
                            <p className='text-gray-300 mb-2'>
                                <strong>E-mail:</strong> <a href="mailto:daneel@codelooney.com" className='text-green-400 hover:underline'>daneel@codelooney.com</a>
                            </p>
                            <p className='text-gray-300 mb-2'>
                                <strong>Adres:</strong> Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='bg-black py-4 text-center text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Code Looney. Alle rechten voorbehouden.</p>
                <div className='mt-2 flex items-center justify-center gap-2'>
                    <a href="/privacy-notice" className='hover:underline'>Privacyverklaring</a>
                    <span>|</span>
                    <a href="/terms-of-service" className='hover:underline'>Gebruiksvoorwaarden</a>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
