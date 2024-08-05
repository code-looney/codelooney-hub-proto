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

const Dashboard = () => {
  const context = useContext(AppContext);

  return (
    <div className='bg-black h-screen flex flex-col gap-[5em]'>
    <Header />
    <MobileMenu />
    <div className={`w-full h-full flex items-center flex-col`}>
      <HeroDashboard className="w-full outline flex items-center flex-col text-center px-10">
        <div aria-label="Portret van mij"className='bg-portrait bg-contain bg-center rounded-full w-[200px] h-[200px]'></div>
        <MyName className="text-white uppercase text-[3rem]">Daneel</MyName>
        <div className='flex flex-col gap-3'>
          <MainTitle className="text-white uppercase ">Achieve universal excellence!</MainTitle>
          <Tagline className="text-white uppercase">Life as you know it will never be the same!</Tagline>
          <Button
          type="button"
          className="text-green-700 uppercase hover:text-white border border-green-700
          hover:bg-green-800 ease-in-out duration-700 transition focus:ring-4
          focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5
          text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white
          dark:hover:bg-green-600 dark:focus:ring-green-800">
          Evolve your life here</Button>
        </div>
      </HeroDashboard>
    </div>
    </div>
  )
}

export default Dashboard