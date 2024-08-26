import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './product'
const Rout = ({product, setProduct, detail}) => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail}/>}/>

    </Routes>
    </div>
  )
}

export default Rout
