import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import Home from './pages/Home'
import NavBar from './components/navBar'
import Footer from './components/footer'
function App() {
  

  return (
    
    <BrowserRouter>
    <div >
    
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search'element={<SearchPage/>}></Route>
      </Routes>
<Footer/>
      </div> 
    </BrowserRouter>
  
  )
}

export default App
