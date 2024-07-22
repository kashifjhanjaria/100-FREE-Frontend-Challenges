

import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Routelayout from './web/Routelayout'
import Faq from './pages/faq/Faq'
import Musicevent from './pages/musicevent/Musicevent'
import Passwordgenerator from './pages/passwordgenerator/Passwordgenerator'
import   { lazy } from 'react'
import Home from './pages/home/Home'
import PasswordChecker from './pages/passwordchecker/PasswordChecker'
import FormWithControlComponent from './pages/formwithcontrolcomponent/FormWithControlComponent'
import FormWithUncontrolComponent from './pages/formwithuncontrolcomponent/FormWithUncontrolComponent'
import FormWithUseFromHook from './pages/formwithuseformhook/FormWithUseFromHook'
import RandomUser from './pages/randomuser/RandomUser'
import CounterUseState from './pages/counterusestate/CounterUseState'
import CounterWithUseReducer from './pages/counterwithusereducer/CounterWithUseReducer'
import RandomUserCustomHook from './pages/randomusercustomhook/RandomUserCustomHook'
import ECommerce from './pages/e-commerce/ECommerce'
import ShopContextProvider from './hook/context/ShopContextProvider'
import CartContextProvider from './hook/context/cartcontext/CartContextProvider'
import NameandNumber from './pages/nameandnumber/NameandNumber'
import Singleproduct from './components/singleproduct/Singleproduct'
import Todoapp from './pages/todoapp/Todoapp'
import PageNotFound from './pages/pagenotefound/PageNotFound'
import Timer from './pages/timer/Timer'
import Debouncing from './pages/debouncing/Debouncing'
import Throttling from './pages/throttling/Throttling'

const Modle = lazy(()=>import('./pages/modal/Modal'));
function App() {

const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<Routelayout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='faq' element={<Faq/>}/>
    <Route path='musicevent' element={<Musicevent/>}/>
    <Route path='passwordgenerator' element={<Passwordgenerator/>}/>
    <Route path='modal' element={<Modle/>}/>
    <Route path='passwordchecker' element={<PasswordChecker/>}/>
    <Route path='formwithcontrol' element={<FormWithControlComponent/>}/>
    <Route path='formwithuncontrol' element={<FormWithUncontrolComponent/>}/>
    <Route path='formwithuseformhook' element={<FormWithUseFromHook/>}/>
    <Route path='randomuser' element={<RandomUser/>}/>
    <Route path='counterwithuseState' element={<CounterUseState/>}/>
    <Route path='counterwithusereducer' element={<CounterWithUseReducer/>}/>
    <Route path='usefetchcustomhook' element={<RandomUserCustomHook/>}/>
    <Route path='/e-commerce' element={<ECommerce />}>
          
        </Route>
        <Route path="e-commerce/:id" element={<Singleproduct />} />
    <Route path='nameandnumber' element={<NameandNumber/>}/>
    <Route path='todoapp' element={<Todoapp/>}/>
    <Route path='timer' element={<Timer/>}/>
    <Route path='debouncing' element={<Debouncing/>}/>
    <Route path='throttling' element={<Throttling/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    
    
  </Route>
))
  
  return (
    <>
    <ShopContextProvider>
      <CartContextProvider>
      <RouterProvider router={router}/>
      </CartContextProvider>
      </ShopContextProvider>
    </>
  )
}

export default App
