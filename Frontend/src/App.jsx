
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  

  return (
    <>
   <Routes>

     <Route path="/" element={<Home/>} />
     <Route path="/nav" element={<Nav/>} />

  

   </Routes>


    </>
  )
}

export default App
