import React, {useState} from 'react'
import Header from './Header'
import Button from './Button'
import MainTitle from './MainTitle'
import DashboardHero from './DashboardHero'
import Tagline from './Tagline'

const Dashboard = () => {
  const [theme, setTheme] = useState("themeColor");
  const themeColor = {
    themeColor: "bg-[#1D2A35]"
  }

  function handleThemeColor () {
    if (theme === "themeColor") {
      setTheme("white")
    } else {
      setTheme("themeColor")
    }
  }
  
  const themeClass = themeColor[theme] || 'bg-white'; // 'bg-default' as fallback
  return (
    <>
    <Header themeClass={themeClass} onThemeColorToggle={handleThemeColor} />
    <div className={`h-screen w-full ${themeClass} text-white overflow-hidden`}>
      <DashboardHero className="h-screen w-full flex flex-col text-center">
        <MainTitle>Life as you know it will never be the same!</MainTitle>
        <Tagline>Achieve universal excellence!</Tagline>
        <Button>Evolve your life here</Button>
      </DashboardHero>
    </div>
    </>
  )
}

export default Dashboard