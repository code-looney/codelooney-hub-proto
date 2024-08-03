import React, {useContext} from 'react'
import Header from './Header'
import Button from './Button'
import MainTitle from './MainTitle'
import HeroDashboard from './HeroDashboard'
import Tagline from './Tagline'
import { ThemeContext } from '../ThemeContext'

const Dashboard = () => {
  const context = useContext(ThemeContext);

  return (
    <>
    <Header />
    <div className={`h-screen w-full flex items-center justify-center`}>
      <HeroDashboard className="h-screen w-full flex items-center flex-col text-center outline px-10">
        <MainTitle className="text-white uppercase ">Achieve universal excellence!</MainTitle>
        <Tagline className="text-white uppercase">Life as you know it will never be the same!</Tagline>
        <Button className="text-white uppercase rounded-sm">Evolve your life here</Button>
      </HeroDashboard>
    </div>
    </>
  )
}

export default Dashboard