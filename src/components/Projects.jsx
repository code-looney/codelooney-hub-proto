import React, { useContext } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';

const ProjectsPage = () => {
  const context = useContext(AppContext);

  const projects = [
    {
      title: 'Project One',
      description: 'A detailed description of Project One that highlights its key features and technologies used. This project demonstrates skills in React, Node.js, and MongoDB.',
      url: 'https://github.com/code-looney/project-one',
      liveUrl: 'https://project-one.vercel.app', // Add the live URL for the project
      image: '/images/project-one.jpg',
    },
    {
      title: 'Project Two',
      description: 'A comprehensive overview of Project Two showcasing its unique approach to problem-solving. Technologies used include Vue.js, Express, and PostgreSQL.',
      url: 'https://github.com/code-looney/project-two',
      liveUrl: 'https://project-two.vercel.app', // Add the live URL for the project
      image: '/images/project-two.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-4xl w-full'>
          <div className='p-6'>
            <h1 className='text-3xl font-extrabold mb-4 text-center'>My Projects</h1>
            <p className='text-gray-300 mb-6 text-center'>
              Explore some of the projects I have worked on, showcasing a variety of technologies and solutions.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {projects.map((project, index) => (
                <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
                  <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
                  <div className='p-6'>
                    <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex gap-4'>
                      <a 
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-green-600 text-black py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300'
                      >
                        View on GitHub
                      </a>
                      <a 
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300'
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
