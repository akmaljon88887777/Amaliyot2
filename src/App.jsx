import React from 'react'
import './App.css'

import { Routes,Route } from 'react-router'
import Carusel from './pages/Carusel'
import Home from './pages/Home'
// import 'bootstrap/dist/css'

// import Grids from './Components/grid'
const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/carusel' element={<Carusel/>}/>
            </Routes>
        </div>
    )
}

export default App
