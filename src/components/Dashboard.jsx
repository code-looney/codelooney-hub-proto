import React, { useContext } from 'react';
import Header from './Header';
import Button from './Button';
import MainTitle from './MainTitle';
import HeroDashboard from './HeroDashboard';
import MobileMenu from './MobileMenu';
import { AppContext } from './AppContext';
import MyName from './MyName';
import InstagramLogoIcon from './InstagramLogoIcon'; // Importeer het Instagram-logo SVG-component
import GitHubLogoIcon from './GithubLogoIcon'; // Importeer het GitHub-logo SVG-component
import { Transition } from '@headlessui/react';

const Dashboard = () => {
  const context = useContext(AppContext);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col h-screen overflow-hidden">
      <Header />
      <MobileMenu />
      <div className="w-full h-full flex items-center justify-center py-5 px-5 md:px-10 lg:px-20 overflow-hidden">
        <HeroDashboard className="flex flex-col md:flex-row w-full max-w-7xl mx-auto text-center md:text-left gap-10 transition-transform duration-700 ease-in-out">
          
          {/* Linkerzijde: Hero Afbeelding */}
          <Transition
            appear={true}
            show={true}
            enter="transition-transform duration-1000"
            enterFrom="transform scale-75 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition-transform duration-1000"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-75 opacity-0"
          >
            <div
              aria-label="Portret van mij"
              className="bg-portrait bg-cover bg-center rounded-lg w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] flex-shrink-0 shadow-lg mx-auto md:mx-0"
            ></div>
          </Transition>
          
          {/* Rechterzijde: Over Mij Sectie */}
          <div className="flex flex-col justify-center text-white space-y-4 max-w-md md:max-w-lg lg:max-w-xl mx-auto md:mx-0">
            <MyName className="uppercase text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-wider">
              Daneel
            </MyName>
            <MainTitle className="uppercase text-lg md:text-xl lg:text-2xl font-semibold text-green-400 leading-tight md:leading-snug">
              Frontend Engineer met een Missie
            </MainTitle>
            <hr className="border-gray-600" />
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
            Ik ben een toegewijde Frontend Engineer met een ambitieuze visie: het opbouwen van mijn eigen softwarebureau. 
            Gedreven door mijn passie voor technologie en oog voor design, streef ik ernaar verfijnde, gebruiksvriendelijke en schaalbare digitale oplossingen te creëren. 
            Samen met mijn cliënten breng ik ideeën tot leven en zet ik elke uitdaging om in een succesvol project.
            </p>
            <hr className="border-gray-600" />
            <Button
              onClick={() => context.setOpen(true)}
              type="button"
              className="text-white uppercase hover:text-black bg-green-700 hover:bg-green-500 border-none 
              ease-in-out duration-300 transition focus:ring-4 focus:outline-none focus:ring-green-300 
              font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center"
            >
             Begin hier
            </Button>
            <hr className="border-gray-600" />
            {/* <div className="flex gap-5 pt-3">
              <a
                onClick={context.handleInstagramClick}
                href={context.instagramAppUrl}
                rel="noopener noreferrer"
                className="block focus:outline-none hover:scale-110 transition-transform duration-300"
              >
                <InstagramLogoIcon />
              </a>
              <a
                href="https://github.com/code-looney"
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none hover:scale-110 transition-transform duration-300"
              >
                <GitHubLogoIcon />
              </a>
            </div> */}
          </div>
        </HeroDashboard>
      </div>
    </div>
  );
};

export default Dashboard;
