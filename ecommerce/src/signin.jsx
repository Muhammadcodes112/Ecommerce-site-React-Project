// import React from 'react'
// import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
// import { BiLogoYoutube } from 'react-icons/bi';
// import { BsYoutube } from 'react-icons/bs';
// import { RiFacebookFill } from 'react-icons/ri';
// import './signin.css'

// const signin = () => {
//   return (
//     <div>
//       <div className="signupcontainer">
//         <div className="content">
//             <div className="leftbox">
//                 <h2>Welcome</h2>
//                 <div className='line'></div>
//                 <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores vero. Cupiditate quos quasi, quas maxime perferendis, aliquid possimus qui blanditiis assumenda ullam, soluta repudiandae quidem repellendus nam iste. Voluptates?</h6>
//                 <button>Learn More</button>
//             </div>
//             <div className="rightbox">
//                 <div className="innercontent">
//                     <h2>Sign In</h2>
//                     <h5>User Name</h5>
//                     <input type="text" placeholder='Name'/>
//                     <h5>Password</h5>
//                     <input type="password" placeholder='password'/>
//                     <button>Submit</button>
//                     <div className="socials">
//                         <li><AiOutlineInstagram /></li>
//                         <li><AiOutlineTwitter /></li>
//                         <li><BsYoutube /></li>
//                     </div>
//                     <h6>Don't have an account? Sign Up</h6>
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default signin












import React, { useState } from 'react' 
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'; 
import { BiLogoYoutube } from 'react-icons/bi'; 
import { BsYoutube } from 'react-icons/bs'; 
import { RiFacebookFill } from 'react-icons/ri'; 
import './signin.css' 
import { Link, Navigate } from 'react-router-dom'; 
import {  signInWithEmailAndPassword } from 'firebase/auth'; 
// import { auth } from './firebase/firebase'; 
import { toast } from 'react-toastify'; 
import logo from './img/logo.png';
// import  Resetpass from './Resetpass' 
 
 
const signin = () => { 
 
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
 
   
 
  const handleSubmit = async(e)=>{ 
    e.preventDefault(); 
    console.log(email, password); 
    
    try { 
      
      await signInWithEmailAndPassword(auth, email,password); 
      console.log("success"); 
      toast.success("SignIn succesfully", { position:"top-center"}); 
      window.location.href=<Link to="/">Home</Link> 
      
      // <Navigate to="/"  /> 
 
       
    } catch (error) { 
      toast.error("Please retry ",{ position:"buttom-center"}) 
    } 
  }; 
 
  return ( 
    <div> 
      <div className="signupcontainer"> 
        <div className="content"> 
          <div className="leftbox"> 
            
            <h2>Welcome to Phantom Gadget Store</h2> 
            <div className='line'></div> 
            <img className='logoimage' src={logo} alt="logo" />
             
          </div> 
          <div className="rightbox"> 
            <form onSubmit={handleSubmit}> 
              <div className="innercontent"> 
                <h2>Sign In</h2> 
                <h5>User Email</h5> 
                <input type="email"  
                placeholder='Email' 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                 /> 
                <h5>Password</h5> 
                <input type="password"  
                placeholder='Password' 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)} 
                 /> 
                <button>Submit</button> 
                <div className="socials"> 
                <p > <Link to="/Reset"> Forgot Password </Link> </p> 
 
                  {/* <Link to="/Resetpass" >Resetpass</Link> */} 
                  {/* <h6><Link to="/Resetpass">forgotpassword</Link></h6> */} 
                  {/* <li><AiOutlineInstagram /></li> 
                  <li><AiOutlineTwitter /></li> 
                  <li><BsYoutube /></li> */} 
                </div> 
                <h6>Don't have an account? <Link to="/signup">Sign Up</Link> </h6> 
 
              </div> 
            </form> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
 
export default signin