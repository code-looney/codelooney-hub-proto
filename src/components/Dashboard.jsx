import React, {useContext} from 'react'
import Header from './Header'
import Button from './Button'
import MainTitle from './MainTitle'
import HeroDashboard from './HeroDashboard'
import Tagline from './Tagline'
import { ThemeContext } from '../ThemeContext'
import MobileMenu from './MobileMenu'
import { AppContext } from './AppContext'
import MyName from './MyName'
import InstagramLogoIcon from './InstagramLogoIcon'; // Import the Instagram logo SVG component
import GitHubLogoIcon from './GithubLogoIcon'; // Import the GitHub logo SVG component
import { Transition } from '@headlessui/react'

const Dashboard = () => {
  const context = useContext(AppContext);

  return (
    <div className='bg-black h-screen flex flex-col'>
    <Header />
    <MobileMenu />
    <div className={`w-full h-full flex items-center flex-col pt-5`}>
      <HeroDashboard className="w-full outline flex items-center flex-col text-center gap-">
        <div aria-label="Portret van mij"className='bg-portrait bg-contain bg-center rounded-full w-[200px] h-[200px]'></div>
        <MyName className="text-white uppercase text-[3rem]">Daneel</MyName>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <MainTitle className="text-white uppercase ">Achieve universal excellence!</MainTitle>
            <Tagline className="text-white uppercase">Life as you know it will never be the same!</Tagline>
          </div>
          <Button
          type="button"
          className="text-green-700 uppercase hover:text-white border border-green-700 select-none
          hover:bg-green-800 ease-in-out duration-700 transition focus:ring-4
          focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
          text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white
          dark:hover:bg-green-600 dark:focus:ring-green-800">
          Evolve your life here</Button>
        </div>
      </HeroDashboard>
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
        <div className="text-center h-full flex justify-end items-end bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-white">
          <div className=" animate-bounce flex items-center flex-col gap-5">
            <div className='flex gap-3'>
              <a onClick={context.handleInstagramClick} href={context.instagramAppUrl} rel="noopener noreferrer" className="block focus:outline-none">
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
     </div>
    </div>
  )
}

export default Dashboard