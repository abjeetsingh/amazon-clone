import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "./App.css"
import { HomePage } from './components'
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App