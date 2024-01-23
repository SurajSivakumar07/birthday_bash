import React from 'react'
import Hello_World from './components/Hello_World'
import { Routes ,Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Page from './components/Page/Page'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <>
      
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/pages' element={<Page />} />
        <Route path='/pages' element={<Contact />} />


        

      </Routes>
 
      
    </>
  )
}
