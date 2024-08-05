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
    <div className='bg-black'>
    <Header />
    <MobileMenu />
    <div className={`h-screen w-full flex items-center justify-center`}>
      <HeroDashboard className="h-screen w-full flex items-center flex-col text-center px-10">
        <div className='bg-portrait bg-contain bg-center rounded-full w-[200px] h-[200px]'></div>
        <MyName className="text-white uppercase">Daneel</MyName>
        <MainTitle className="text-white uppercase ">Achieve universal excellence!</MainTitle>
        <Tagline className="text-white uppercase">Life as you know it will never be the same!</Tagline>
        <Button className="text-white uppercase rounded-sm">Evolve your life here</Button>
      </HeroDashboard>
    </div>
    </div>
  )
}

export default Dashboard