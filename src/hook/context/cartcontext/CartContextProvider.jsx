import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartContextProvider = ({children}) => {
    const [addToCart , setAddToCart] = useState([])
    // console.log(addtToCart , 'CartContext');
  return (
   <CartContext.Provider value={[addToCart , setAddToCart]}>
    {children}
   </CartContext.Provider>
  )
}

export default CartContextProvider