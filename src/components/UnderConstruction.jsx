import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import InstagramLogoIcon from './InstagramLogoIcon'; // Import the Instagram logo SVG component
import GitHubLogoIcon from './GithubLogoIcon'; // Import the GitHub logo SVG component

const UnderConstruction = () => {
  // Replace 'YOUR_INSTAGRAM_USERNAME' with your actual Instagram username
  const instagramUsername = 'codelooney';

  // Construct the Instagram app URI
  const instagramAppUrl = `instagram://user?username=${instagramUsername}`;
  // Fallback URL in case Instagram app is not installed
  const instagramWebUrl = `https://www.instagram.com/${instagramUsername}/`;

  const handleInstagramClick = (event) => {
    {/* its not redirecting when on desktop, 
    and when on mobile it opens IG, and popup permission page (cancel and open) */}
    event.preventDefault();
    window.open(instagramAppUrl).focus();
    setTimeout(() => {
      window.open(instagramWebUrl).focus();
    });
  };

  useEffect(() => {
    document.title = "⏳ Code Looney";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Transition
        appear={true}
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-white">
          <h1 className="text-2xl md:text-4xl font-bold md:font-normal mb-4">🚀 Under Construction 🚀</h1>
          <p className="text-2xl mb-6">Stay looney 😈</p>
          <a href={instagramWebUrl} target="_blank" rel="noopener noreferrer" className="block mb-8 focus:outline-none">
            <h2 className="text-3xl font-bold hover:underline">
              Connect with me
            </h2>
          </a>
          <div className="mb-10 animate-bounce flex items-center flex-col gap-5">
            <div className='flex gap-3'>
              <a onClick={handleInstagramClick} href={instagramAppUrl} rel="noopener noreferrer" className="block focus:outline-none">
                <InstagramLogoIcon />
              </a>
              <a href="https://github.com/code-looney" target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                <GitHubLogoIcon />
              </a>
            </div>
            <p>Click on the icons</p>
          </div>
        </div>
      </Transition>

      {/* this is the feature branch */}
    </div>
  );
};

export default UnderConstruction;