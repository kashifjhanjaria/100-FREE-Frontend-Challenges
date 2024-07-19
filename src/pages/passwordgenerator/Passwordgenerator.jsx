import React, { useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const Passwordgenerator = () => {
  const [password, setPassword] = useState('');
  const [range, setRange] = useState(4);
  const [selectcharactor, setslectCharactor] = useState(false);
  const [selectsymbol, setSelectSymbol] = useState(false);
 
  const rangeHandler = () => {
    // console.log("Hello");
    if (range < 20) {

      setRange(range + 1)
    }
  }

  const stringCheckHandler = (e) => {

    setslectCharactor(e.target.checked);

  }
  const symbolCheckHandler = (e)=>{
    setSelectSymbol(e.target.checked)
    // console.log(symbol);
  }
  const passwordgeneratorHandler = () => {
    const number = '1234567890';
    const character = 'ABCDEFGIJKLMNOPQRSTUVXYZ';
    const symbol = "!@#$%^&*(){}[]<>?|?/";
    let num = '';
  
    let mixpassword = number;
    if (selectcharactor && selectsymbol) {
     
      mixpassword = number.concat(character, symbol);
    } else if (selectcharactor) {
      
      mixpassword = number.concat(character);
    } else if (selectsymbol) {
      
      mixpassword = number.concat(symbol);
    } else {
    
    }
  
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(Math.random() * mixpassword.length);
      num += mixpassword[randomIndex];
    }
  
    setPassword(num);
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
              <Nameheader name="Password Generator" />
            </div>
            <div className="mt-4">
              <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                <div>

                  <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">







               
      



                    <div className='w-[300px] h-auto border p-3 bg-gray-400 flex flex-col gap-2'>
                      <div className='flex flex-col'>
                        <label htmlFor="">Pasword Generator</label>
                        <input type="text"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md
       text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                        onChange={() => password} value={password} maxLength={range} placeholder='Password Generator' />
                      </div>
                      <div className='flex flex-col'>
                        <label htmlFor="rangeInput">Choose a number:</label>
                        <input  onInput={rangeHandler} type="range" id="rangeInput"
                          name="rangeInput" min="0" max="20" defaultValue={range} step="1" />
                        
                        
                        
                        
                         
                        
                        
                        
                        
                        <span id="rangeValue">{range}</span>
                      </div>
                      <div className='flex items-center border h-10'> {/* Added height for demonstration */}
                        <label htmlFor="string" className="mr-2">Choose a String:</label> {/* Added margin-right for spacing */}
                        <input type="checkbox" style={{ marginTop: '5px' }} name="string" id="string" onChange={(e) => stringCheckHandler(e)} />
                      </div>

                      <div className='flex items-center border h-10'> {/* Added height for demonstration */}
                        <label htmlFor="string" className="mr-2">Choose a Symbol:</label> {/* Added margin-right for spacing */}
                        <input type="checkbox" style={{ marginTop: '5px' }} name="string" id="string" onChange={(e) => symbolCheckHandler(e)} />
                      </div>
                      <div className='flex flex-col'>

                        <button onClick={passwordgeneratorHandler} className='bg-green-600  w-fit py-1 px-3 text-white rounded-full'>Generate</button>
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

export default Passwordgenerator