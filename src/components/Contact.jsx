import React, { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setErrorMessage('Something went wrong. Please try again later.');
            }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-black text-green-500 min-h-screen flex flex-col'>
            <Header />
            <MobileMenu />
            <main className='flex flex-col items-center justify-center flex-1 p-6'>
                <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-4xl w-full'>
                    <div className='p-6'>
                        <h1 className='text-3xl font-extrabold mb-4'>Contact Us</h1>
                        <p className='text-gray-300 mb-6'>
                            We'd love to hear from you! Please fill out the form below or contact us through our details.
                        </p>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className='bg-gray-900 p-6 rounded-lg'>
                            <div className='mb-4'>
                                <label className='block mb-2 text-gray-300'>
                                    Full Name
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
                                    Email Address
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
                                    Message
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
                                disabled={isSubmitting}
                                className='bg-green-600 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {/* Contact Information */}
                        <div className='mt-8'>
                            <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
                            <p className='text-gray-300 mb-2'>
                                <strong>Email:</strong> <a href="mailto:daneel@codelooney.com" className='text-green-400 hover:underline'>daneel@codelooney.com</a>
                            </p>
                            <p className='text-gray-300 mb-2'>
                                <strong>Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='bg-black py-4 text-center text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Code Looney. All rights reserved.</p>
        <div className='mt-2 flex items-center justify-center gap-2'>
          <a href="/privacy-notice" className='hover:underline'>Privacy Notice</a>
          <span>|</span>
          <a href="/terms-of-service" className='hover:underline'>Terms of Service</a>
        </div>
      </footer>
        </div>
    );
};

export default Contact;
