import React, { useContext } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';

const ProjectsPage = () => {
  const context = useContext(AppContext);

  const projects = [
    {
      title: 'Space App',
      description: 'Project development still ongoing',
      url: 'https://github.com/code-looney/space-app.git',
      liveUrl: 'https://space-app-ten-iota.vercel.app/', // Add the live URL for the project
      image: '/images/Screenshot 2024-08-16 at 21-54-22 Space tourism.png',
    },
    // Add more projects as needed
  ];

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-4 md:p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-full md:max-w-4xl w-full'>
          <div className='p-4 md:p-6'>
            <h1 className='text-2xl md:text-3xl font-extrabold mb-4 text-center'>My Projects</h1>
            <p className='text-gray-300 mb-6 text-center'>
              Explore some of the projects I have worked on, showcasing a variety of technologies and solutions.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              {projects.map((project, index) => (
                <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
                  <img src={project.image} alt={project.title} className='w-full h-40 md:h-48 object-cover' />
                  <div className='p-4 md:p-6'>
                    <h2 className='text-xl md:text-2xl font-bold mb-2'>{project.title}</h2>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex gap-2 md:gap-4'>
                      <a 
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-green-600 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-xs md:text-sm'
                      >
                        View on GitHub
                      </a>
                      <a 
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-xs md:text-sm'
                      >
                        View Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-black py-6 text-center text-gray-400'>
        <div className='flex justify-center gap-4 mb-4'>
          <a 
            href='https://www.linkedin.com/in/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-700 transition duration-300'
          >
            LinkedIn
          </a>
          <a 
            href='https://twitter.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500 transition duration-300'
          >
            Twitter
          </a>
          <a 
            href='https://github.com/yourprofile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-500 transition duration-300'
          >
            GitHub
          </a>
        </div>
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

export default ProjectsPage;
