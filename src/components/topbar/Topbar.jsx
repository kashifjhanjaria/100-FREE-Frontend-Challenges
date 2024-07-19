import React from 'react'

const Topbar = () => {
  return (
   <>
   
   <div
          className="relative shadow-md bg-white flex-shrink-0"
         
        >
          <div className="flex justify-between items-center h-16 px-12">
            <div>
              <div className="relative w-64">
                <div className="relative ">
                  <input
                    type="text"
                    className="block w-full py-2 pl-12 pr-4 bg-gray-200 rounded-full border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none"
                  />
                  <div className="flex items-center absolute left-0 inset-y-0 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-current text-gray-600"
                    >
                      <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                      ></path>
                    </svg>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="flex items-center">
              <a href="#"><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    className="fill-current text-gray-400"
                  ></path>
                  <path
                    d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    className="fill-current text-gray-600"
                  ></path></svg
              ></a>
              <div className="ml-6">
               
                <div className="relative">
                  <button type="button" className="block w-full focus:outline-none">
                    <span className="flex items-center"
                      ><img
                        src="https://www.gravatar.com/avatar/9240e2357dc0b9a4cfd1b109c23af063?d=https%3A%2F%2Fui-avatars.com%2Fapi%2Fmuse"
                        className="h-8 w-8 rounded-full"/>
                      <span className="ml-3">muse</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 ml-2 text-gray-600"
                      >
                        <path
                          d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                        ></path></svg
                    ></span>
                  </button>
            
                </div>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Topbar