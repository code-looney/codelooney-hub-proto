import React from 'react'

const Navigation = (props) => {
    const {children, ...rest} = props;

  return (
    <div {...rest}>
        <ul>
             <li>{children}</li>
        </ul>
    </div>
  )
}

export default Navigation