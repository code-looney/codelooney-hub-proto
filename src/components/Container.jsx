import React from 'react'

const Container = (props) => {
    const {children, ...rest} = props;

  return (
    <div {...rest}>{children}</div>
  )
}

export default Container