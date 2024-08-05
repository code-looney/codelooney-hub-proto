import React from 'react'

const MyName = ( props ) => {
    const {children, ...rest} = props;

  return (
    <h2 {...rest}>{children}</h2>
  )
}

export default MyName