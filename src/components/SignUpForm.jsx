import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };

  const handleClose = () => {
    // Logic to handle close (e.g., hide form, navigate away, etc.)
    console.log('Form closed');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { email, option });
  };

  return (
    <div className="absolute w-full h-full bg-green-600 bg-opacity-40  flex items-center justify-center">
      <div className="absolute bg-black inset-0 bg-cover bg-center filter blur-md" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
      <div className="relative z-10 w-[400px] h-[400px] mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <button
          className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl"
          onClick={handleClose}
        >
          X
        </button>
        <form onSubmit={handleSubmit} className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Register today!</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="option" className="block text-gray-700 mb-2">Select your area of ​​interest:</label>
            <select
              id="option"
              value={option}
              onChange={handleOptionChange}
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
  );
};

export default SignUpForm;
