import React, { useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'
import { useForm } from "react-hook-form"
let render = 0;
const FormWithUseFromHook = () => {
  const { register, handleSubmit , formState: { errors } } = useForm()
 
  const onSubmit = (data) => console.log(data)

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
              <Nameheader name="Form With Control Component" />
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                    <div className='w-auto h-auto '>
                      <div className='flex flex-col gap-2'>


              <h1>Render {render}</h1>

                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
                          <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input {...register("email", { required: "Email Address is required", pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address"
            } })}
        aria-invalid={errors.email ? "true" : "false"} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
                          
                          {errors.email && <p  className='text-red-500'>{errors.email.message}</p>}
                          </div>
                          <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input {...register("password", { required: "Password is required" })}
        aria-invalid={errors.password ? "true" : "false"}  type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                         {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                          </div>
                          
                          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
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

export default FormWithUseFromHook