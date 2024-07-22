
import React, { useEffect, useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const Debouncing = () => {

  const [inputvalue , setInputValue] = useState("");
const [debouncingValue , setDebouncingValue] = useState(inputvalue)
const [ withoutdebouncingcounter , setwithoutdebouncingcounter ] = useState(0);
const [ withdebouncingcounter , setwithdebouncingcounter ] = useState(0);

  function  nameinpuChange (e){
    setwithoutdebouncingcounter(withoutdebouncingcounter+1);
  setInputValue(e.target.value);
  }

  useEffect(()=>{
    console.log('Effect')
    let timer = setTimeout(()=>{
      setwithdebouncingcounter(withdebouncingcounter + 1)
      setDebouncingValue(inputvalue)
    }, 300)
    return ()=>{
      clearTimeout(timer)
    }
  }, [inputvalue])



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
              <Nameheader name="Debouncing"/>
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                    <div className='w-auto h-auto '>
                      <div className='flex flex-col gap-2'>
                     



                




                      <div className="max-w-sm">
  <div className="flex mb-2">
    <div className="flex-1">
      <input 
      onInput={nameinpuChange}
      type="text" id="hs-strong-password-with-indicator-and-hint" 
      className="py-3 px-4 block w-full border-gray-200 rounded-md
       text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter password"/>
      <div id="hs-strong-password" data-hs-strong-password='{
            "target": "#hs-strong-password-with-indicator-and-hint",
            "hints": "#hs-strong-password-hints",
            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1"
          }' className="flex mt-2 -mx-1"></div>
    </div>
  </div>

  <div id="hs-strong-password-hints" className="mb-3">
    <div>
    
      <span data-hs-strong-password-hints-weakness-text="" className="text-sm font-semibold text-gray-800">
        without Debouncing : {inputvalue}  - : Counter {withoutdebouncingcounter}</span>
    </div>

    <h4 className="my-2 text-sm font-semibold text-gray-800">
      with Debouncing : {debouncingValue} - : Counter {withdebouncingcounter == 1  ? '' : withdebouncingcounter }
    </h4>

   
  </div>
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

export default Debouncing