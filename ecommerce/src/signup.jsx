// import React from 'react'
// import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
// import { BiLogoYoutube } from 'react-icons/bi';
// import { BsYoutube } from 'react-icons/bs';
// import { RiFacebookFill } from 'react-icons/ri';
// import './signup.css'
// const signup = () => {
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
//                     <h3>Sign Up</h3>
//                     <input type="file" className='profileimg' />
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
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default signup





















import React, { useState } from 'react' 
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'; 
import { BiLogoYoutube } from 'react-icons/bi'; 
import { BsYoutube } from 'react-icons/bs'; 
import { RiFacebookFill } from 'react-icons/ri'; 
import './signup.css' 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth,db } from './firebase/firebase'; 
import { setDoc,doc } from "firebase/firestore"; 
import {toast} from "react-toastify" 
const signup = () => { 
 
  const [userName, setUserName] = useState("") 
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 
  const [conpassword, setConpassword] = useState("") 
 
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    console.log(userName, email, password, conpassword); 
    try { 
      await createUserWithEmailAndPassword(auth,email,password); 
      const user = auth.currentUser; 
      if (user){ 
       await setDoc(doc(db,"Users", user.uid),  
       {email: user.email, Name:userName}) 
      } 
      console.log(user) 
      console.log("usercreated successfully") 
      window.location.href="/signin" 
      toast.success("account created succesfully",{ position:"top-center"}) 
    } catch (error) { 
      console.log(error.message) 
      toast.error("user already exist",{ position:"buttom-center"}) 
    } 
 
  } 
 
 
  return ( 
    <div> 
      <div className="signupcontainer"> 
        <div className="content"> 
          <div className="leftbox"> 
            {/* <h2>Welcome</h2> */} 
            {/* <div className='line'></div> */} 
            {/* <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores vero. Cupiditate quos quasi, quas maxime perferendis, aliquid possimus qui blanditiis assumenda ullam, soluta repudiandae quidem repellendus nam iste. Voluptates?</h6> 
            <button>Learn More</button> */} 
          </div> 
          <div className="rightbox"> 
 
            <form onSubmit={handleSubmit}> 
              <div className="innercontent"> 
                <h3>Sign Up</h3> 
                {/* <input type="file" className='profileimg' /> */} 
                {/* username */} 
                <h5>User Name</h5> 
                <input type="text" 
                  placeholder='Name' 
                  name='userName' 
                  value={userName} 
                  onChange={e => setUserName(e.target.value)} 
                /> 
 
                {/* email */} 
                <h5>Email</h5> 
                <input type="email" 
                  placeholder=' email' 
                  name='email' 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                /> 
 
                {/* password */} 
                <h5>Password</h5> 
                <input type="password" 
                  placeholder='password' 
                  name='password' 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                /> 
                {/* confirmpassword */} 
                <h5>Confirm  Password</h5> 
                <input type="password" 
                  placeholder='Confirm password' 
                  name='confirmpassword' 
                  value={conpassword} 
                  onChange={e => setConpassword(e.target.value)} 
 
                /> 
                {/* buttons */} 
                <button>Submit</button> 
                <div className="socials"> 
                  <li><AiOutlineInstagram /></li> 
                  <li><AiOutlineTwitter /></li> 
                  <li><BsYoutube /></li> 
                </div> 
              </div> 
            </form> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
 
export default signup