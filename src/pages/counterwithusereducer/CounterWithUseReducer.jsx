import React, { useReducer } from 'react'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading';
import Nameheader from '../../components/nameheader/Nameheader';
const reducer=(state, action)=>{
    console.log(state, action);
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
          case 'decrement':
            return {  count: state.count >  0 ? state.count - 1  :state.count};
          default:
            throw new Error();
    }
}
const CounterWithUseReducer = () => {
    const initialState = { count: 0 };
    const[state, dispatch] = useReducer( reducer ,initialState);
    console.log(state.count);
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
                            <Nameheader name="Counter With useReducer" />
                        </div>
                        <div className="mt-4">
                            <div className="px-6 py-4 bg-white shadow-md rounded-lg">
                                <div>

                                    <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                                        <div className='w-auto h-auto '>
                                            <div className='flex flex-col gap-2'>




                                                <div className=" w-[400px] px-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                                    <div className='flex justify-center'>
                                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{state.count}</h5>
                                                    </div>


                                                    <div className='flex justify-center gap-3'>
                                                        <button onClick={()=>dispatch({type:'increment'})} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            increase

                                                        </button>
                                                        <button onClick={()=>dispatch({type:'decrement'})} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            decrease

                                                        </button>
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

export default CounterWithUseReducer