import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css"
import { HomePage,NavBar, Checkout, SearchResults, ProductPage } from './components'
export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/search' element={<SearchResults/>}/>
        <Route exact path='/product/:id' element={<ProductPage/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
        
      </Routes>
    </Router>
  )
}

export default App