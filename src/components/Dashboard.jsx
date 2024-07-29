import React, {useContext} from 'react'
import Header from './Header'
import Button from './Button'
import MainTitle from './MainTitle'
import DashboardHero from './DashboardHero'
import Tagline from './Tagline'
import { ThemeContext } from '../ThemeContext'

const Dashboard = () => {
  const context = useContext(ThemeContext);

  return (
    <>
    <Header />
    <div className={`h-screen w-full`}>
      <DashboardHero className="h-screen w-full flex flex-col text-center outline">
        <MainTitle className="text-white">Life as you know it will never be the same!</MainTitle>
        <Tagline className="text-white">Achieve universal excellence!</Tagline>
        <Button className="text-white">Evolve your life here</Button>
      </DashboardHero>
    </div>
    </>
  )
}

export default Dashboard