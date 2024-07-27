import React from 'react'

const DashboardHero = ( props ) => {
    const {children, ...rest} = props;
    
  return (
    <div {...rest}>{children}</div>
  )
}

export default DashboardHero