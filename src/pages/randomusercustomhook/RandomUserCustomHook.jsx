import React from 'react'
import useFetchHook from '../../hook/useFetchHook'
import Welcomeheading from '../../components/welcomeheading/Welcomeheading'
import Nameheader from '../../components/nameheader/Nameheader'

const RandomUserCustomHook = () => {
    const {data} = useFetchHook('https://randomuser.me/api/')
    // console.log(data);
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
            <Nameheader name="Random User With Custom Hook"/>
          </div>
          <div className="mt-4">
            <div className="px-6 py-4 bg-white shadow-md rounded-lg">
              <div>

                <div className="mt-3 mb-8 max-w-2xl text-sm text-gray-700 flex justify-center items-center">

                  <div className='w-auto h-auto '>
                    <div className='flex flex-col gap-2'>
                    



   {data && 
   <div className="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
  <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="bg-cover h-40" style={{backgroundImage:"url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')"}}></div>
    <div className="border-b px-4 pb-6">
        <div className="text-center sm:text-left sm:flex mb-4">
            <img className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
             src={`${data.results[0].picture.medium}`} alt="" />
            <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">{data.results[0].name.title + ' ' + data.results[0].name.first + ' ' +  data.results[0].name.last}</h3>
                <div className="inline-flex text-grey-dark sm:flex items-center">
                    <svg className="h-5 w-5 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                    {data.results[0].location.city } - <span>{ data.results[0].location.country }</span>
                </div>
            </div>
        </div>
        <div className="flex">
            <button className="flex-1 rounded-full bg-blue-500 text-white antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">Follow</button>
            <button className="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">Message</button>
        </div>
    </div>
    <div className="px-4 py-4">
        <div className="flex items-center text-grey-darker mb-4">
            <svg className="h-6 w-6 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/></svg>
            <span> {data.results[0].gender}</span>
        </div>
        <div className="flex">
            <div className="flex flex-row-reverse justify-end mr-2">
              <img className="border-2 border-white rounded-full h-10 w-10" 
              src={`${data.results[0].picture.thumbnail}`} alt="" />
              
            </div>
              
        </div>
    </div>
  </div>
</div>
               }     

                   
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

export default RandomUserCustomHook