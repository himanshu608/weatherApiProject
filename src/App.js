import React from 'react'
import './App.scss'
import Header from './components/Header'
import Dayforcast from './components/Dayforcast'
import Hourforcast from './components/Hourforcast'

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
function App() {
    return (
        <Router>
        <div className="app">
            <Header/>
            <Routes>
                <Route path="/" element={<Dayforcast/>}/>
                <Route path="/hour" element={<Hourforcast/>}/>
            </Routes>
        </div>
        </Router>
    )
}

export default App
