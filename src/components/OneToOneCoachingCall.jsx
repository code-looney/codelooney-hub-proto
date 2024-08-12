import React, { useContext } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';

const OneToOneCoachingCall = () => {
  const context = useContext(AppContext);

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row'>
          <div className='relative w-full md:w-1/2'>
            <img
              src="/images/IMG_0192.jpeg"
              alt="Coaching Call"
              className='w-full h-[500px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none'
            />
          </div>
          <div className='w-full md:w-1/2 p-6 flex flex-col justify-center'>
            <h1 className='text-4xl font-extrabold mb-4'>1-to-1 Coaching Call with Daneel</h1>
            <h2 className='text-2xl mb-6'>2-Hour Personalized Session</h2>
            <p className='text-gray-300 mb-6'>
              Engage in a 2-hour confidential coaching session with Daneel. This personalized consultation offers dedicated time to address your goals, receive expert advice, and gain insights tailored to your needs. Whether you're seeking career advice or personal growth, this session is designed to provide the focus and expertise you need.
            </p>
            <Link
              to="/checkout"
              className='bg-green-600 text-black text-center py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
            >
              Book Your Session
            </Link>
            <div className='mt-6 text-center text-gray-400 text-sm'>
              <a href="/terms-of-service" className='hover:underline'>Terms of Service</a> | 
              <a href="/privacy-policy" className='hover:underline ml-2'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-black py-4 text-center text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Code Looney. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OneToOneCoachingCall;
