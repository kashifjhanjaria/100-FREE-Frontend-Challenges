import React from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const Musicevent = () => {
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
              <Nameheader name="Music Event"/>
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                    <div className='w-auto h-auto '>
                      <div className='flex flex-col gap-2'>
                      <div className='flex gap-2 justify-between items-center p-2 bg-gray-200'>
                        <div className='rounded-lg bg-green-200 p-2 flex flex-col items-center' >
                          <span>Today</span><span className='font-semibold '>1:00</span></div>
                        <div ><h4 className='font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing </h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, natus.</p></div>
                        <div className='w-[70px]'><button className='bg-red-200 p-2 font-semibold rounded-lg'>Sold out</button></div>
                      </div>

                      <div className='flex gap-2 justify-between items-center p-2 bg-gray-200'>
                        <div className='rounded-lg bg-green-200 p-2 flex flex-col items-center' >
                          <span >Today</span><span className='font-semibold '>1:00</span></div>
                        <div ><h4 className='font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing </h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, natus.</p></div>
                        <div className='w-[70px]'><button className='bg-red-200 p-2 font-semibold rounded-lg'>Sold out</button></div>
                      </div>

                      <div className='flex gap-2 justify-between items-center p-2 bg-gray-300'>
                        <div className='rounded-lg bg-green-200 p-2 flex flex-col items-center' >
                          <span >Today</span><span className='font-semibold '>1:00</span></div>
                        <div ><h4 className='font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing </h4> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, natus.</p></div>
                        <div className='w-[70px]'>
                          <button className='bg-green-200 p-1 font-semibold rounded-lg'>Buy Now</button></div>
                      </div>
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

export default Musicevent