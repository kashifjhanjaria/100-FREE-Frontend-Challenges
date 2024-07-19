import React, { useContext, useEffect, useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'
import { ShopContext } from '../../hook/context/ShopContext';
import { CartContext } from '../../hook/context/cartcontext/CartContext';
import Cart from '../../components/cart/Cart';
import { ErrorBoundary } from "react-error-boundary";
import Products from '../../components/products/Products';
import Sheemar from '../../components/sheemar/Sheemar';
const ECommerce = () => {
    const products = useContext(ShopContext);
    const [addToCart , setAddToCart] = useContext(CartContext);
    const [isShowCartOpen , setIsShowCartOpen] = useState(false);
   const sheemar = [1,2 , 3, 4, 5, 6];
    // console.log( 'products',products);
    

  
      const showCartHandler = ()=>{
        setIsShowCartOpen(!isShowCartOpen);
        console.log(isShowCartOpen);
      }
  return (
    <>

      <div className="flex-grow flex flex-col">
        <div className="flex-grow">

          <div className="px-12 py-8 mx-auto max-w-4xl">
            <div>
              <div className="flex items-baseline justify-between">
                <div>
                  <Welcomeheading>
                    <h2 className="text-lg">
                      Welcome To 100 - Free - Frontend - Challengs
                    </h2>
                  </Welcomeheading>

                </div>

              </div>
              <Nameheader name="E-commerce"/>
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                    <div className='w-auto h-auto '>
                      <div className='flex flex-col gap-2'>




    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
           
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">E-Commerce</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            
            <button onClick={showCartHandler} className="text-sm  dark:text-blue-500 py-1 px-2 bg-gray-300 hover:gray-500">Cart {`${addToCart ? addToCart.length : null }`}</button>
        </div>
    </div>
</nav>
<div className=' w-[100%] h-full  flex justify-end '>






{
    isShowCartOpen ?  <Cart isShowCartOpen={isShowCartOpen} addToCart={addToCart} showCartHandler={showCartHandler}/>
 :  null  
}



  








</div>





                      

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      
      {products  ? products.map(items=><Products key={items.id} items={items} products={products}/>): sheemar.map((item, index)=><Sheemar key={index}/> ) }
      {/* {products  ?sheemar.map((item, index)=><Sheemar key={index}/> ) :    products.map(items=><Products key={items.id} items={items}/>) } */}
      
      
     
     
      
    
    
      
      
   
    </div>
  </div>
</section>

                     

                      </div>
                    </div>
                  </div>
                </div>
                <div>


                </div>




              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ECommerce