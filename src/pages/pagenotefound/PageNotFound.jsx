import React from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const PageNotFound = () => {
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
          <Nameheader name="Page Not Found"/>
        </div>
                  <div className="mt-4">
                    <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                      <div>
                        
                        <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">
                          
                          <div className='w-[500px] h-auto border bg-gray-200 py-2 px-2 flex flex-col'>
                            
                            <h1 className='font-[50px]'>Page Not Found</h1>
                            
  
                            
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

export default PageNotFound