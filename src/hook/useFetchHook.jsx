import React, { useEffect, useState } from 'react'

const useFetchHook = (url) => {
    const [data, setData] =useState('')
    useEffect(()=>{
        ;( async()=>{
           try {
            const reponse = await fetch(url);
            const result = await reponse.json();
            // console.log(result);
            setData(result);
            if (!data) {
                throw new Error('Hello Error')
            }
           } catch (error) {
            
           }
         
            
        })()
    }, [])
  return {data};
}

export default useFetchHook