import React, { forwardRef } from 'react'

const Input = ( props , ref) => {
    // console.log(onChange);
    // console.log(typeof props);
    const {className , placeholder  } = props;
    console.log(ref , 'ref');
  return (
   <input ref={ref} type="text"  className={className}  placeholder={placeholder} {...props} />
  )
}

export default forwardRef(Input)