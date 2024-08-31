import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Rout from './Rout';
import Footer from './footer';
import productDetail from './productdetail';

function MainApp() {
  const location = useLocation();
  // Determine if the current route is either '/signin' or '/signup'
  const showHeaderFooter = !['/signin', '/signup'].includes(location.pathname);

  // State for the cart
  const [cart, setCart] = useState([]);

  // State for product detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  // Search Filter Function
  const [product, setProduct] = useState(productDetail);

  const searchbtn = (product) => {
    const change = productDetail.filter((x) => x.Cat === product);
    setProduct(change);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // Add to cart
  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert('Product is added to cart');
    }
  };

  return (
    <>
      {showHeaderFooter && <Nav searchbtn={searchbtn} />}
      <Rout
        product={product}
        setProduct={setProduct}
        detail={detail}
        view={view}
        close={close}
        setClose={setClose}
        cart={cart}
        setCart={setCart}
        addtocart={addtocart}
      />
      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
