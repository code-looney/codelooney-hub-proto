import React from 'react'
import Trademark from './Trademark'
import Button from './Button'
import Navigation from './Navigation'

const Header = (props) => {
console.log(props.themeClass)

  return (
    <div className={`outline h-20 flex items-center justify-between px-10 gap-5 ${props.themeClass}`}>
        <div>
            <Trademark>{"[Code Looney]"}</Trademark>
            <Navigation>Takeoff Here</Navigation>
        </div>
        <Button onClick={() => props.onThemeColorToggle()} className="outline p-2">Toggle</Button>
    </div>
  )
}

export default Header