// import React from 'react'
// import { FaTruckMoving } from "react-icons/fa";
// import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
// import { BsBagCheck } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import { CiLogin, CiLogout } from "react-icons/ci";
// import './Nav.css'
// // import { useAuth0 } from "@auth0/auth0-react";



// import App from './App';
// import { createRoot } from 'react-dom/client';
// // import { Auth0Provider } from '@auth0/auth0-react';
// // import reportWebVitals from './reportWebVitals';

// const Nav = () => {


//     const root = createRoot(document.getElementById('root'));

// root.render(
// <Auth0Provider
//     domain="dev-muhammad112.us.auth0.com"
//     clientId="8ijQRNqUsvPfA5ndM4eZtDi4NFrjvoLw"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
// );
// // reportWebVitals();



//     const { loginWithRedirect } = useAuth0();
//   return (
//     <>
//     <div className='free'>
        
//             <div className='icon'>
//               <FaTruckMoving />  
//             </div>
//         <p>FREE delivery for shopping upto $1000</p>
//     </div>
//     <div className='main-header'>
//         <div className="container">
//             <div className="logo">
//                 <img src="./img/logo.svg" alt="logo" />
//             </div>
//             <div className="search_box">
//                 <input type="text" value='' placeholder='Search product Name' autoComplete='off' />
//                 <button>Search</button>
//             </div>
//             <div className="icon">
//                 <div className="account">
//                     <div className="user_icon">
//                         <AiOutlineUser />
//                     </div>
//                     <p>Hello, User</p>
//                 </div>
//                 <div className="second_icon">
//                     <Link to="/" className='link'><AiOutlineHeart /></Link>
//                     <Link to="/cart" className='link'><BsBagCheck /></Link>
//                 </div>
              
//             </div>
//         </div>
//     </div>

//     <div className='header'>
//         <div className="container">
//             <div className="nav">
//                 <ul>
//                     <li>
//                         <Link to='/' className='link'>Home</Link>
//                     </li>
//                     <li>
//                         <Link to='/product' className='link' >Product</Link>
//                     </li>
//                     <li>
//                         <Link to='/about' className='link' >About</Link>
//                     </li> <li>
//                         <Link to='/contact' className='link' >Contact</Link>
//                     </li>
//                 </ul>
//             </div>
            
//             <div className="auth">
//                 <button onClick={() => loginWithRedirect()}><CiLogin /></button>
//                 <button><CiLogout /></button>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Nav

















import React, { useState } from 'react';
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLogin, CiLogout } from "react-icons/ci";
import './Nav.css';
import { useAuth0 } from "@auth0/auth0-react";

const Nav = ({searchbtn}) => {
  const [search, setSearch] = useState()
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <div className='free'>
        <div className='icon'>
          <FaTruckMoving />
        </div>
        <p>FREE delivery for shopping upto $1000</p>
      </div>
      <div className='main-header'>
        <div className="container">
          <div className="logo">
            <img src="./img/logo.svg" alt="logo" />
          </div>
          <div className="search_box">
            <input type="text" value={search} placeholder='Search product Name....' autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={() => searchbtn (search)}>Search</button>
          </div>
          <div className="icon">
            {
                isAuthenticated && (
                    <div className="account">
                    <div className="user_icon">
                        <AiOutlineUser />
                    </div>
                    <p>Hello,{user.name}</p>
                    </div>
                )
            }
           
            <div className="second_icon">
              <Link to="/" className='link'><AiOutlineHeart /></Link>
              <Link to="/cart" className='link'><BsBagCheck /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='header'>
        <div className="container">
          <div className="nav">
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/product' className='link'>Product</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className="auth">
            {
                isAuthenticated?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} ><CiLogout /></button>
                :
                <button onClick={() => loginWithRedirect()}><CiLogin /></button>
            }
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
