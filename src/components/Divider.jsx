import React from 'react'

const Divider = (props) => {
    const {children, ...rest} = props;

  return (
    <hr {...rest} />
  )
}

export default Divider