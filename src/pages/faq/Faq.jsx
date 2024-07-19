import React, { useState } from 'react'
import parse from 'html-react-parser';
const Faq = () => {

  const [openId, setOpenId] = useState(null);

  const faqHandler = (id) => {
    setOpenId(openId === id ? null : id);
    console.log(openId , "OpenId ", id , "Id");
  };


const faq = [
  {
    id:1,
    question:'What is React?',
    answer :'<b>Answer:</b> React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
  },
  {
    id:2,
    question:'How does React work?',
    answer :'<b>Answer:</b> React creates a virtual DOM (a JavaScript representation of the actual DOM) and updates it in response to changes in state or props. React then efficiently updates and renders just the right components when data changes, using a reconciliation process to minimize direct manipulation of the DOM.',
  },
  {
    id:3,
    question:'What are components in React?',
    answer:'<b>Answer:</b> Components are the building blocks of a React application. They can be thought of as custom, reusable HTML elements that can be nested, managed, and handled independently. Components can be either class-based or function-based (functional components).'
  }
]

  return (
  <>
  
  <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            
            <div className="px-12 py-8 mx-auto max-w-4xl">
              <div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h2 className="text-lg">
                      Welcome To BobRTC!
                    </h2>
                    <div className="mt-2 text-sm text-gray-700">
                      Take your first steps into a serverless future.
                    </div>
                  </div>
           
                </div>
                    <div className="mt-4">
                  <div className="px-6 py-4 bg-white shadow-md rounded-lg flex justify-between">
                    <div className="flex justify-between text-sm font-medium uppercase tracking-wide">
                        <svg
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="-mt-1 mr-4 h-6 w-6">
                          <path
                            d="M5 8h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm1 2v7h12v-7H6z"
                            className="fill-current text-gray-400"
                          ></path>
                          <path
                            d="M6 12a4 4 0 0 1-4-4 1 1 0 0 1 .1-.45l2-4A1 1 0 0 1 5 3h14a1 1 0 0 1 .9.55l2 4c.06.14.1.3.1.45a4 4 0 0 1-7 2.65 3.99 3.99 0 0 1-6 0A3.99 3.99 0 0 1 6 12z"
                            className="fill-current text-gray-600"
                          ></path>
                        
                        </svg>
                      <p>FAQ</p>
                                  </div>
                        <div
                          className="ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                        >
                        
                        </div>
                      </div>
                    
                                  </div>
                </div>
                <div className="mt-4">
                  <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                    <div>
                      
                      <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">
                        
                        <div className='w-[500px] h-auto border bg-gray-200 py-2 px-2 flex flex-col'>
                          {
                            faq && faq.map((item)=>{
                              return (
                            <div key={item.id} className='flex flex-col  '>
                            <span className='bg-green-200 cursor-pointer mt-2 p-2 rounded-lg' onClick={()=>faqHandler(item.id)}>{item.question}</span>
                            <span className={`${openId === item.id ? '' : 'hidden'} p-2 bg-green-400 rounded-lg`}>
                           { parse(`${item.answer}`)}
                           </span>
                          </div>
                              )
                            })
                          }
                          

                          
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

export default Faq