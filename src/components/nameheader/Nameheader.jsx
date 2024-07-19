import React from 'react'

const Nameheader = ({name}={}) => {
  return (
   <>
   
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
                      <p>{name}</p>
                    </div>
                    <div
                      className="ml-3 font-semibold text-sm text-gray-600 uppercase tracking-wider"
                    >

                    </div>
                  </div>

                </div>
   </>
  )
}

export default Nameheader