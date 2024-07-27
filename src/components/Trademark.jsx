import React from 'react'

const Trademark = (props) => {
    const  {children, ...rest} = props;
    
  return (
    <div {...rest}>{children}</div>
  )
}

export default Trademark

