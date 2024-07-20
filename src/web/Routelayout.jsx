import React, { Suspense } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Topbar from '../components/topbar/Topbar'
import Loading from '../components/loading/Loading'

const Routelayout = () => {
  return (
    <>
  


  <div className="font-sans text-gray-900 antialiased">
    <div className="min-h-screen flex bg-gray-200">
     <Navbar/>
      <div className="flex-grow flex flex-col">
       <Topbar/>
       <Suspense fallback={<Loading/>}>
       <Outlet/>
       </Suspense>
        </div>
      </div>
    </div>
    <div className="vue-portal-target"></div>
   



    
    </>
  )
}

export default Routelayout