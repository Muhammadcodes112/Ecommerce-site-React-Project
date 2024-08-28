import './App.css'
import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from './Nav'
import Rout from './Rout'
import Footer from './footer';
import productDetail from './productdetail';

function App() {
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

  return (
    <>
    <BrowserRouter>    
      <Nav searchbtn = {searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose}/>
      <Footer />
    </BrowserRouter >
    </>
  )
}

export default App
