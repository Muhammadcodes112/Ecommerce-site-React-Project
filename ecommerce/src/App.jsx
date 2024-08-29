import './App.css'
import React, { useState, useTransition } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from './Nav'
import Rout from './Rout'
import Footer from './footer';
import cart from './cart';
import productDetail from './productdetail';

function App() {
  //add to cart 
  const [cart, setCart] = useState([])
  //prodcut detail
  const [close, setClose ] = useState(false)
  const [detail, setDetail] = useState([]);
  //Search Filter Function
  const [product, setProduct] = useState(productDetail)
  const searchbtn = (product) => {
    
    const change =  productDetail.filter((x) => {
      return x.Cat === product
    })
    setProduct(change)
  }

    const view = (product) => {
      setDetail([{...product}])
      setClose(true)
    }

    //add to cart
    const addtocart = (product) => {

    }

  return (
    <>
    <BrowserRouter>    
      <Nav searchbtn = {searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer />
    </BrowserRouter >
    </>
  )
}

export default App
