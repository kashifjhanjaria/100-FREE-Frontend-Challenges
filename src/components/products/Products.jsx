import React, { useContext } from 'react'
import { CartContext } from '../../hook/context/cartcontext/CartContext';

const Products = ({items , products}) => {
    const [addToCart , setAddToCart] = useContext(CartContext);

    const addToCartHandler = (id) => {
        console.log(id);
    
        const filtered = products.find((item) => item.id === id);
     
        
    
        if (filtered.id === id) {
          console.log('love you');
          let quentity = 0;
          filtered.totalQuentity = quentity++;
          console.log(filtered);
          setAddToCart((prevCartItems) => [...prevCartItems, filtered]);
          console.log(addToCart , 'AddddddddddddTTTTTTTTTTTTTToooo');
        }
    
        // console.log(addtToCart, 'Cart Data');
      };



  return (
 <>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full cursor-pointer hover:shadow-lg">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce"
           className="object-cover object-center w-full h-full block" 
           src={items.image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 " title={items.title}>{items.title.substring(0 , 20) + '...'}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{items.category}</h2>
          <p className="mt-1">{items.description.substring(0 , 40)+'...'}</p>
          <p className="mt-1">{items.price}</p>
          <div>
            <button onClick={()=>addToCartHandler(items.id)} className='py-1 px-2 bg-gray-300 hover:bg-gray-500 rounded-lg hover:text-white'>Add to Cart</button></div>
        </div>
      </div> 
        
   
    </>
  )
}

export default Products