import React, { useRef, useState } from 'react'
import Input from '../../components/input/Input'
import Nameheader from '../../components/nameheader/Nameheader';
import Welcomeheading from '../../components/welcomeheading/Welcomeheading';
let rendered = 0;
const NameandNumber = () => {
    const nameRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef  = useRef(null)
const [changeinput , setChangeInput] = useState(false);

// if (changeinput ) {
//     emailRef.current.value = null;
//     numberRef.current.value = null;
// }
    const submitHandler = (e)=>{

e.preventDefault();

console.log(nameRef.current.value , 'nameRef');
// console.log(numberRef.current.value , 'numberRef');
console.log(passwordRef.current.value , 'PasswordRef');
if (changeinput) {
    console.log("Enterrrrrrrrrrrrrrrrrrrrrrrr");
    console.log(emailRef.current.value , 'emailRef');
}else{
    console.log('NOTTTTTTTTTTTTTTTTTTTTTTTT');
    console.log(numberRef.current.value , 'numberRef');
}
// console.log(emailRef.current.value , 'emailRef');

    }
   const inputHandler= (e)=>{
console.log(e.target.checked);
setChangeInput(!changeinput)
console.log(changeinput , 'Change Input');
   }

    rendered++;
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
        <Nameheader name="Form With Control Component"/>
      </div>
      <div className="mt-4">
        <div className="px-6 py-4 bg-white shadow-md rounded-lg">
          <div>

            <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

              <div className='w-auto h-auto '>
                <div className='flex flex-col gap-2'>
              

                <h1>Render {rendered/2}</h1>

<form className="max-w-sm mx-auto w-[400px] px-4">
  <div className="mb-5">



    <label htmlFor="email" 
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <Input ref={nameRef}  className="bg-gray-50 border border-gray-300 
     text-gray-900 text-sm rounded-lg 
     focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="name" />

<label htmlFor="number" 
className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
<input type="checkbox" name="" onClick={(e)=>inputHandler(e)} id="" />

{changeinput ? <><label htmlFor="number" 
className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number</label>
<Input ref={numberRef}   className="bg-gray-50 border border-gray-300 
     text-gray-900 text-sm rounded-lg 
     focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="Enter Your Number" /> </> : <>
     <label htmlFor="number" 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <Input ref={emailRef}   className="bg-gray-50 border border-gray-300 
             text-gray-900 text-sm rounded-lg 
             focus:ring-blue-500 focus:border-blue-500 
             block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
             dark:placeholder-gray-400 dark:text-white 
             dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder="Enter Your Email" /></>}

<label htmlFor="number" 
className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
<Input ref={passwordRef}   className="bg-gray-50 border border-gray-300 
     text-gray-900 text-sm rounded-lg 
     focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     placeholder="Enter Your password" />


  <span className='text-red-400'></span>
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

export default NameandNumber