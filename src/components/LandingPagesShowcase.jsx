import React, { useState, useContext } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';

const LandingPagesShowcase = () => {
  const context = useContext(AppContext);

  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      title: 'Landingspagina',
      description: 'Onze Landingspagina is een veelzijdige en op maat gemaakte oplossing voor bedrijven die hun online aanwezigheid willen versterken. Deze landingspagina is ontworpen om maximale conversies te genereren door een strakke, professionele uitstraling te combineren met een gebruiksvriendelijke interface. Met strategisch geplaatste call-to-actions, overtuigende inhoud en een aantrekkelijk ontwerp, helpt deze pagina bedrijven om hun doelstellingen te bereiken, of het nu gaat om het verkrijgen van leads, het promoten van een product of het versterken van merkbekendheid. De pagina is volledig responsive en geoptimaliseerd voor zowel desktop- als mobiele apparaten, zodat je altijd de beste gebruikerservaring biedt aan je bezoekers. Ontdek hoe deze landingspagina je kan helpen om je online doelen te realiseren.',
      url: 'https://github.com/code-looney/fix-it-pro.git',
      liveUrl: 'https://fix-it-pro.vercel.app',
      image: '/images/Screenshot 2024-08-24 at 08-26-41 Create Next App.png',
    },
    {
      title: 'Floral Fusion',
      description: 'Floral Fusion biedt een prachtig assortiment van bloemenarrangementen, zorgvuldig samengesteld om elke gelegenheid te verfraaien. Onze bloemen zijn geselecteerd op kwaliteit en versheid, zodat je altijd kunt rekenen op een levendig en stijlvol boeket. Of je nu op zoek bent naar een kleurrijk boeket voor een speciale gelegenheid of een elegante bloemenschikking voor je interieur, Floral Fusion levert de perfecte bloemen om je wensen te vervullen.',
      url: 'https://github.com/code-looney/floral-fusion-client.git',
      liveUrl: 'https://floral-fusion-client.netlify.app',
      image: '/images/Screenshot 2024-09-07 at 15-08-09 Create Next App.png',
    },
    {
      title: 'Ijsparadijs',
      description: 'Ijsparadijs is jouw ultieme bestemming voor een verfrissende ijsbeleving. Onze website biedt een uitgebreide selectie van heerlijke, ambachtelijke ijssoorten die perfect zijn voor elke gelegenheid. Van klassieke smaken tot innovatieve creaties, wij zorgen ervoor dat je de beste kwaliteit en smaak ervaart in elk bolletje ijs. Ontdek onze unieke smaken en bestel eenvoudig online om je ijsdromen te vervullen.',
      url: 'https://github.com/code-looney/ijsparadijs.git',
      liveUrl: 'https://ijsparadijs.netlify.app',
      image: '/images/Screenshot 2024-09-07 at 15-11-49 Create Next App.png',
    },
    {
      title: 'Brasserie Lumière',
      description: 'Brasserie Lumière biedt een elegante culinaire ervaring met verfijnde gerechten en een warme sfeer. Onze website laat je kennismaken met ons menu, de sfeer van ons restaurant, en de mogelijkheden voor reserveringen. Of je nu op zoek bent naar een romantisch diner of een gezellige maaltijd met vrienden, bij Brasserie Lumière zorgen wij voor een onvergetelijke ervaring. Ontdek onze gerechten en reserveer je tafel eenvoudig online.',
      url: 'https://github.com/code-looney/brasserie-lumiere-proto.git',
      liveUrl: 'https://brasserie-lumiere.netlify.app',
      image: '/images/Screenshot 2024-09-07 at 15-16-25 Create Next App.png',
    }
    // Add more landing pages here as needed
  ];

  const handleToggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className='bg-black text-green-500 min-h-screen flex flex-col'>
      <Header />
      <MobileMenu />
      <main className='flex flex-col items-center justify-center flex-1 p-4 md:p-6'>
        <div className='bg-gray-800 text-green-100 rounded-lg shadow-lg max-w-full md:max-w-4xl w-full'>
          <div className='p-4 md:p-6'>
            <h1 className='text-2xl md:text-3xl font-extrabold mb-4 text-center'>Landing Pages Showcase</h1>
            <p className='text-gray-300 mb-6 text-center'>
              Discover and purchase beautifully designed, high-converting landing pages for your business needs.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              {projects.map((project, index) => (
                <div key={index} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden'>
                  <img src={project.image} alt={project.title} className='w-full h-40 md:h-48 object-cover' />
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

export default LandingPagesShowcase;
