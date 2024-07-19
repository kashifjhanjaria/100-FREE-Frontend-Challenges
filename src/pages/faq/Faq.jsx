import React, { useState } from 'react'
import parse from 'html-react-parser';
import Welcomeheading from '../../components/welcomeheading/Welcomeheading';
import Nameheader from '../../components/nameheader/Nameheader';
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
            <Welcomeheading>
              <h2 className="text-lg">
                Welcome To 100 - Free - Frontend - Challengs
              </h2>
            </Welcomeheading>

          </div>

        </div>
        <Nameheader name="FAQ"/>
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