import { useEffect, useState } from "react"
import { ShopContext } from "./ShopContext";



 const ShopContextProvider = ({children})=>{
  const [products , setProducts] = useState(null);
 
  // console.log(products, "Products State");
  useEffect(()=>{
      const getproducts = async()=>{
          const reponse = await fetch('https://fakestoreapi.com/products');
          const result = await reponse.json();
          // console.log(result , 'context');
          setProducts(result);
      }
      getproducts();
  }, [])

    return (
      <ShopContext.Provider value={products}>
        {children}
      </ShopContext.Provider>
    );
}
export default ShopContextProvider;