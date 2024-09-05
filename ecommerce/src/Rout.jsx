// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import Home from './Home'
// import Product from './product'
// import Cart from './cart'
// import Signup from './signup'
// import Signin from './signin'
// import Contact from './Contact'; 

// // import cont from './cont'
// // import Contact from './Contact'; // Correct import

// // import contact from './Contact'
// // import Cont from './contact'
// import Profile from './Profile'
// // import Contact from './Contact'
// import { db } from './firebase/firebase2';
// import { collection, addDoc } from 'firebase/firestore';


// const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
//   return (
//     <div>
//     <Routes>
//         <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />}/>
//         <Route path='/signup' element={<Signup />}/>
//         <Route path='/signin' element={<Signin />}/>
//         <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
//         <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
//         {/* <Route path='/contact' element={<cont />}/> */}
//         {/* <Route path='/contact' element={<Contact />} /> */}

//         <Route path='/profile' element={<Profile />}/>
//     </Routes>
//     </div>
//   )
// }

// export default Rout


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './product';
import Cart from './cart';
import Signup from './signup';
import Signin from './signin';
import Contact from './Contact';  // Importing the Contact component
import Profile from './Profile';

const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} /> {/* Corrected the Contact route */}
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Rout;
