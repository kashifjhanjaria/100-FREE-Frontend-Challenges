import React from 'react'

const Sheemar = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full cursor-pointer hover:shadow-lg">
        <a className="block relative h-48 rounded overflow-hidden">
          <div 
           className="object-cover object-center w-full h-full block bg-gray-300 " 
           ></div>
        </a>
        <div className="mt-4 flex flex-col">
          <h3 className="bg-gray-300 rounded-full w-[100px] h-[10px]  text-xs tracking-widest title-font mb-1 "></h3>
          <h2 className=" bg-gray-300 rounded-full w-[120px] h-[15px]  text-gray-900 title-font text-lg font-medium"></h2>
          <p className="mt-1 bg-gray-300 w-[150px] h-[50px] rounded-lg"></p>
          <p className="mt-1 bg-gray-300 w-[50px] h-[15px] rounded-full"></p>
          <div>
            <button className='mt-2 bg-gray-300 w-[50px] h-[30px] rounded-full py-1 px-2 bg-gray-300 hover:bg-gray-500 rounded-lg hover:text-white'></button></div>
        </div>
      </div> 
  )
}

export default Sheemar