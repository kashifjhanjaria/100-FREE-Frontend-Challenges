import React, { useEffect, useRef, useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'
let render = 0;
const FormWithUncontrolComponent = () => {
  const emailRef = useRef(null);
  const passwordRef =useRef(null)
 
  const [error , setError] = useState(false)
  const [pError , setPError] = useState(false)
  
  const submitHandler =(e)=>{
    e.preventDefault();
    setError(false)
    setPError(false)
    if (!passwordRef.current.value) {
      setPError(true)
    }
    // console.log('Hello');
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    if (!emailRef.current.value) {
    
      setError(true) 
    
    
    }
    if (!passwordRef.current.value) {
    
     
      setPError(true) 
    
    }
 
  }
 

  render++;
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
        <Nameheader name="Form With UnControl Component"/>
      </div>
      <div className="mt-4">
        <div className="px-6 py-4 bg-white shadow-md rounded-lg">
          <div>

            <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

              <div className='w-auto h-auto '>
                <div className='flex flex-col gap-2'>
              

                <h1>Render {render}</h1>
                <form className="max-w-sm mx-auto w-[400px] px-4">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input ref={emailRef} type="text" id="email" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
     dark:focus:border-blue-500" 
    placeholder="name@flowbite.com"  />
    <span className='text-red-500'>{error ? "Enter Your Mail" : ''}</span>
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input ref={passwordRef} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    <span className='text-red-500'>{pError ? "Enter Your Password" : ''}</span>
  </div>

  <button onClick={(e)=>submitHandler(e)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

                
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

export default FormWithUncontrolComponent