import React from 'react'

const HeroDashboard = ( props ) => {
    const {children, ...rest} = props;
    
  return (
    <div {...rest}>{children}</div>
  )
}

export default HeroDashboard