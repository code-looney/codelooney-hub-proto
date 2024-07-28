import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

const GlobalHeaderLinks = (props) => {
    const {...rest} = props;

    const context = useContext(ThemeContext);

  return (
    <div className='flex gap-5'>
      {context.routes && context.routes.map(route => {
        return (
          <NavLink>{route.page}</NavLink>
        )
      })}
    </div>
  )
}

export default GlobalHeaderLinks