import React from 'react'
import Navbar from './Navbar'
import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'
import { BrowserRouter as Router,Routes,Route ,BrowserRouter} from 'react-router-dom'

function App() {
  return (

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
 
  )
}

export default App
