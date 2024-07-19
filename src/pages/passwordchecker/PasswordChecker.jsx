import React, { useState } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const PasswordChecker = () => {
  // const [min]
  const [minimumnumberofcharacters , setMinimumnumberofcharacters] = useState(false);
  const [specialcharacters , setSpecialcharacters] = useState(false);
  const [numbers , setNumber] = useState(false);
  const [lowerCase , setLowerCase] = useState(false);
  const [uperCase , setUperCase] = useState(false);
  const [password , setPassword] = useState('');
  const [level , setLevel] =useState(["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]);
  // console.log(level[0] , 'check Level');
  let index = 0;
if (password.length > 0) {
    level[++index]
}
if (password.length >= 6) {
  level[++index]
}

if (password.length >= 10) {
  level[++index]
}
if (password.length >= 12) {
  level[++index]
}
if (password.length >= 15) {
  level[++index]
}




  const passwordCheckerHandler = (e)=>{
    setPassword(e.target.value);
    // let check = e.target.value.includes('%')
    // // console.log(check);

    // if (check) {
    //   setSpecialcharacters(true)
    // }else{
    //   setSpecialcharacters(false)
    // }


    const { value } = e.target;
        const specialCharacterPattern = /[%$#@!]/;
        const hasSpecialCharacter = specialCharacterPattern.test(value);
        setSpecialcharacters(hasSpecialCharacter);

        const numbersPattern = /[0-9]/;
        const hasnumbersPattern = numbersPattern.test(value);
       
        setNumber(hasnumbersPattern);



        const lowercasePattern = /[a-z]/;
        const haslowerCasePattern = lowercasePattern.test(value);
        // console.log(haslowerCasePattern , 'lowercase');
        setLowerCase(haslowerCasePattern)
        // setNumber(hasnumbersPattern);

        const uperCasePattern = /[A-Z]/;
        const hasuperCasePattern = uperCasePattern.test(value);
        // console.log(hasuperCasePattern , 'UperCase');
        setUperCase(hasuperCasePattern)






    if (e.target.value.length <= 6) {
      // console.log('Week PasswWEeeord' , e.target.value.length);
      let lenght = e.target.value.length;
      if (lenght <= 6  && lenght === 6) {
        setMinimumnumberofcharacters(true);
      }else{
        setMinimumnumberofcharacters(false)
      }
    }
    
    


    
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
               <Nameheader name="Password Checker"/>
               </div>
               <div className="mt-4">
                 <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                   <div>
                     
                    




<div className="max-w-sm">
  <div className="flex mb-2">
    <div className="flex-1">
      <input onChange={(e)=>passwordCheckerHandler(e)} type="password" id="hs-strong-password-with-indicator-and-hint" 
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
      <span className="text-sm text-gray-800">Level:</span>
      <span data-hs-strong-password-hints-weakness-text={level[index]} className="text-sm font-semibold text-gray-800">{level[index]}</span>
    </div>

    <h4 className="my-2 text-sm font-semibold text-gray-800">
      Your password must contain:
    </h4>

    <ul className="space-y-1 text-sm text-gray-500">
      <li data-hs-strong-password-hints-rule-text="min-length" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
        <span className={`${minimumnumberofcharacters ? '' :'hidden'}`} data-check="">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span data-uncheck="" className={`${minimumnumberofcharacters ? 'hidden' :''}`}>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
        Minimum number of characters is 6.
      </li>
      <li data-hs-strong-password-hints-rule-text="lowercase" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
        <span className={`${lowerCase ? "" :"hidden"}`} data-check="">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span data-uncheck="" className={`${lowerCase ? "hidden" :""}`}>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
        Should contain lowercase.
      </li>
      <li data-hs-strong-password-hints-rule-text="uppercase" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
        <span className={`${uperCase ? "" :"hidden"}`} data-check="">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span data-uncheck="" className={`${uperCase ? "hidden" :""}`}>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
        Should contain uppercase.
      </li>
      <li data-hs-strong-password-hints-rule-text="numbers" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
        <span className={`${numbers ? '' : 'hidden'}`} data-check="">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span data-uncheck="" className={`${numbers ? 'hidden' : ''}`}>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
        Should contain numbers.
      </li>
      <li data-hs-strong-password-hints-rule-text="special-characters" className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2">
        <span className={`${specialcharacters ? '' :"hidden"}`} data-check="">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
        <span data-uncheck="" className={`${specialcharacters ? 'hidden' :""}`}>
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </span>
        Should contain special characters.
      </li>
    </ul>
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

export default PasswordChecker