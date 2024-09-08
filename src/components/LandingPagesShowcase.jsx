import React, { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { IoMdClose, IoMdExpand } from "react-icons/io";

const projects = [
  {
    title: 'Fix It Pro',
    description: 'Onze landingspagina is een veelzijdige en op maat gemaakte oplossing voor bedrijven die hun online aanwezigheid willen versterken. Deze landingspagina is ontworpen om maximale conversies te genereren door een strakke, professionele uitstraling te combineren met een gebruiksvriendelijke interface. Met strategisch geplaatste call-to-actions, overtuigende inhoud en een aantrekkelijk ontwerp, helpt deze pagina bedrijven om hun doelstellingen te bereiken, of het nu gaat om het verkrijgen van leads, het promoten van een product of het versterken van merkbekendheid. De pagina is volledig responsive en geoptimaliseerd voor zowel desktop- als mobiele apparaten, zodat je altijd de beste gebruikerservaring biedt aan je bezoekers. Ontdek hoe deze landingspagina je kan helpen om je online doelen te realiseren.',
    liveUrl: 'https://fix-it-pro-client.netlify.app',
    image: '/images/Screenshot 2024-08-24 at 08-26-41 Create Next App.png',
    branch: 'Bouw'
  },
  {
    title: 'Floral Fusion',
    description: 'Floral Fusion biedt een prachtig assortiment van bloemenarrangementen, zorgvuldig samengesteld om elke gelegenheid te verfraaien. Onze bloemen zijn geselecteerd op kwaliteit en versheid, zodat je altijd kunt rekenen op een levendig en stijlvol boeket. Of je nu op zoek bent naar een kleurrijk boeket voor een speciale gelegenheid of een elegante bloemenschikking voor je interieur, Floral Fusion levert de perfecte bloemen om je wensen te vervullen.',
    liveUrl: 'https://floral-fusion-client.netlify.app',
    image: '/images/Screenshot 2024-09-07 at 15-08-09 Create Next App.png',
    branch: 'Retail'
  },
  {
    title: 'Ijsparadijs',
    description: 'Ijsparadijs is jouw ultieme bestemming voor een verfrissende ijsbeleving. Onze website biedt een uitgebreide selectie van heerlijke, ambachtelijke ijssoorten die perfect zijn voor elke gelegenheid. Van klassieke smaken tot innovatieve creaties, wij zorgen ervoor dat je de beste kwaliteit en smaak ervaart in elk bolletje ijs. Ontdek onze unieke smaken en bestel eenvoudig online om je ijsdromen te vervullen.',
    liveUrl: 'https://ijsparadijs.netlify.app',
    image: '/images/Screenshot 2024-09-07 at 15-11-49 Create Next App.png',
    branch: 'Horeca'
  },
  {
    title: 'Brasserie Lumière',
    description: 'Brasserie Lumière biedt een elegante culinaire ervaring met verfijnde gerechten en een warme sfeer. Onze website laat je kennismaken met ons menu, de sfeer van ons restaurant, en de mogelijkheden voor reserveringen. Of je nu op zoek bent naar een romantisch diner of een gezellige maaltijd met vrienden, bij Brasserie Lumière zorgen wij voor een onvergetelijke ervaring. Ontdek onze gerechten en reserveer je tafel eenvoudig online.',
    liveUrl: 'https://brasserie-lumiere.netlify.app',
    image: '/images/Screenshot 2024-09-07 at 15-16-25 Create Next App.png',
    branch: 'Horeca'
  },
  {
    title: 'Zeevis Delicatessen',
    description: 'Zeevis Delicatessen biedt een verfijnde ervaring voor liefhebbers van hoogwaardige zeevruchten en delicatessen. Onze website stelt je in staat om ons uitgebreide menu te verkennen, meer te leren over de sfeer van ons restaurant en eenvoudig reserveringen te maken. Of je nu een culinaire ontdekkingsreis wilt maken met vrienden of een bijzondere maaltijd wilt delen, Zeevis Delicatessen zorgt voor een memorabele en smaakvolle ervaring. Ontdek onze versheid en kwaliteit, en reserveer je tafel vandaag nog.',
    liveUrl: 'https://zeevis-delicatessen.netlify.app',
    image: '/images/Screenshot 2024-09-08 at 20-54-26 Create Next App.png',
    branch: 'Horeca'
  }
];

const branches = [...new Set(projects.map(project => project.branch))]; // Extract unique branches

const LandingPagesShowcase = () => {
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState('All');

  const handleToggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const filteredProjects = projects.filter(project =>
    selectedBranch === 'All' || project.branch === selectedBranch
  );

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-4 md:p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-full md:max-w-4xl w-full'>
          <div className='p-4 md:p-6'>
            <h1 className='text-2xl md:text-3xl font-extrabold mb-4 text-center'>Landingspagina Showcase</h1>
            <p className='text-gray-300 mb-6 text-center'>
              Ontdek en koop prachtig ontworpen, conversiegerichte landingspagina's voor je zakelijke behoeften.
            </p>

            {/* Branch Navigation Links */}
            <div className='mb-4'>
              <div className='flex flex-wrap gap-4 mb-4'>
                <button
                  onClick={() => setSelectedBranch('All')}
                  className={`px-4 py-2 rounded-lg ${selectedBranch === 'All' ? 'bg-green-600' : 'bg-gray-700'} text-green-100`}
                >
                  All
                </button>
                {branches.map((branch, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedBranch(branch)}
                    className={`px-4 py-2 rounded-lg ${selectedBranch === branch ? 'bg-green-600' : 'bg-gray-700'} text-green-100`}
                  >
                    {branch}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Display */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              {filteredProjects.map((project, index) => (
                <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
                  <div className='relative'>
                    <img
                      src={project.image}
                      alt={project.title}
                      className='w-full h-40 md:h-48 object-cover cursor-pointer'
                      onClick={() => openModal(project.image)}
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                      <button
                        onClick={() => openModal(project.image)}
                        className='text-white text-3xl md:text-4xl h-full w-full flex justify-center items-center p-30'
                        aria-label='View Fullscreen'
                      >
                        <IoMdExpand />
                      </button>
                    </div>
                  </div>
                  <div className='p-4 md:p-6'>
                    <h2 className='text-xl md:text-2xl font-bold mb-2'>{project.title}</h2>
                    <p className='text-gray-300 mb-4'>
                      {expanded === index ? project.description : `${project.description.slice(0, 150)}...`}
                      <button
                        onClick={() => handleToggleExpand(index)}
                        className='text-blue-400 hover:underline ml-2'
                      >
                        {expanded === index ? 'Lees minder' : 'Lees meer'}
                      </button>
                    </p>
                    <div className='flex gap-2 md:gap-4'>
                      <a 
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-xs md:text-sm'
                      >
                        Bekijk Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      {modalImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'
          onClick={handleOverlayClick}
        >
          <div className='relative'>
            <img
              src={modalImage}
              alt='Larger view'
              className='max-w-screen-md max-h-screen object-contain'
            />
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700'
              aria-label='Close modal'
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      )}

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
        </div>
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

export default LandingPagesShowcase;
