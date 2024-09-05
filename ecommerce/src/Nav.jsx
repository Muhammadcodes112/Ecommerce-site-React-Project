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
import { auth, db } from './firebase/firebase'; 
import { IoSearch } from "react-icons/io5";
import { doc, getDoc } from 'firebase/firestore';
import { PiShoppingCartFill } from "react-icons/pi";
import logo from './img/logo.png';
// import { useAuth } from './context/ac';
// import { AuthProvider, useAuth } from './context/Ac';

const Nav = ({searchbtn}) => {
  
  const [search, setSearch] = useState()
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [userDetails, setUserDetails] = useState(null); 
  // const {currentUser }  = useAuth();
  const fetchUserData = async () => { 
    auth.onAuthStateChanged(async (user) => { 
      console.log(user) 
      const docRef = doc(db, "Users", user.uid); 
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) { 
        setUserDetails(docSnap.data()) 
        console.log(docSnap.data()) 
      } else { 
        console.log("user is not logged in ") 
      } 
    }); 
  }; 
  useState(() => { 
    fetchUserData() 
  }, [])

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
            <img className='logoimage' src={logo} alt="logo" />
            <p>Phantom Gadgets</p>
          </div>
          <div className="search_box">
            <input type="text" value={search} placeholder='Search product Name....' autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={() => searchbtn (search)}><IoSearch /></button>
          </div>
          <div className="icon">
            
           
            <div className="second_icon">
              <Link to="/cart" className='link'><PiShoppingCartFill /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='header'>
        <div className="container">
        <img className='logoimage' src={logo} alt="logo" />
          <div className="nav">
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/product' className='link'>Product</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/cont' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className="userne">
            {userDetails ? ( 
 
            <h3> 
              <h6>{userDetails.Name}</h6> 

            </h3> 
            ) : ( 
            <p> {/* Loading ....... */} </p> 
            ) 
            }
            <div className="auth">
            <Link to="/Profile"><button><CiLogin /></button> </Link>   

             {/* {currentUser ?  
            <Link to="/Profile"><button><CiLogin /></button> </Link> 
               
            : 
              <li><Link to='/signin' className='link'>SignIn</Link></li> 
             
            }  
             */}
          </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Nav;
