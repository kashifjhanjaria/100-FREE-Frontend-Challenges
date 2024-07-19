import React from 'react'
import { createPortal } from 'react-dom';
const Model = ({isopen , isModelClose = ()=>{}}) => {
    
    const isModelCloseHandler = ()=>{
        console.log(isopen);
        if (isopen) {
            isModelClose(!isopen) 
        }
        
    }
  return (
    createPortal(
    <div onClick={isModelCloseHandler} style={{zIndex:'999'}} className='absolute top-0  w-full h-full  bg-gray-500/50 flex justify-center items-center z-99' >
        <div onClick={(e)=>e.stopPropagation()} className='w-[500px] h-[400px] bg-white rounded-lg py-4 px-5 flex flex-col justify-between'>
            <div className='header py-5   bg-gray-100 flex justify-center'>Header</div>
            <div className='body py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a itaque qui quae quidem eum illo quas delectus vitae incidunt alias nam odit voluptate laboriosam magnam dignissimos non distinctio assumenda in et? Veniam quia neque vel repellendus ut. Reprehenderit, dicta!</div>
            <div className='footer py-5  flex gap-2 justify-end '><button className='bg-red-300 py-1 px-2 rounded-lg'  onClick={isModelCloseHandler}>Cencle</button> <button className='bg-green-300 py-1 px-2 rounded-lg' onClick={isModelCloseHandler}>Accept</button></div>
        </div>
    </div> , document.getElementById('portal'))
  )
}

export default Model