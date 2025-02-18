import React from 'react'
import './bar.css'
import Navbar from './Navbar'
import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'
import State from './component/state'
import Effect from './component/Efect'
import Login from './component/login'
import Signup from './component/signup'
import { BrowserRouter as Router,Routes,Route ,BrowserRouter} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
   <Navbar/>
   <div className='body'>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/state' element={<State/>}/>
    <Route path='/effect' element={<Effect/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   </div>
   </BrowserRouter>

 
  )
}

export default App
