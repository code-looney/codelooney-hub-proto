import React, { useContext } from 'react'
import Trademark from './Trademark'
import Button from './Button'
import { ThemeContext } from '../ThemeContext'
import Divider from './Divider'
import GlobalHeaderLinks from './GlobalHeaderLinks'

const Header = () => {
    const context = useContext(ThemeContext);

  return (
    <div className={`${context.theme} h-20 flex items-center justify-between px-10 gap-5 text-white`}>
        <div className="flex items-center ">
            <Trademark>{"[Code Looney]"}</Trademark>
            <Divider className=" w-10  rotate-90 " />
            <GlobalHeaderLinks></GlobalHeaderLinks>
        </div>
        <Button onClick={() => context.toggleTheme()} className="outline p-2">Toggle</Button>
    </div>
  )
}

export default Header