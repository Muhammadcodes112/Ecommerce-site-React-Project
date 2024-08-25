import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import product from './product'
const Rout = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<product />}/>

    </Routes>
    </div>
  )
}

export default Rout
