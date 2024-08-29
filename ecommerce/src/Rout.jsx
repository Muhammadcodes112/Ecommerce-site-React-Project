import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './product'
import Cart from './cart'
const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} />}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
    </div>
  )
}

export default Rout
