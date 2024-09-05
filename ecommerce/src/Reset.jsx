import React from "react"; 
import { sendPasswordResetEmail } from "firebase/auth"; 
// import { auth } from "../firebase/firebase"; 
import { toast } from "react-toastify"; 
import { auth } from "./firebase/firebase"; 
import { Link } from "react-router-dom"; 
 
function Reset() { 
  const handlesubmit = async (e) => { 
    e.preventDefault(); 
    const emailval = e.target.email.value; 
 
    try { 
      await sendPasswordResetEmail(auth, emailval); 
      toast.success("Please check your email for the password reset link."); 
      window.location.href = "/signin" 
    } catch (error) { 
      toast.error("Failed to send password reset email: " + error.message); 
    } 
  }; 
 
  return ( 
    <> 
      <h1>Forgot Password</h1> 
      <form onSubmit={handlesubmit}> 
        <input type="email" name="email" placeholder="Enter your email" required /> 
        <br /> 
        <Link to="/" ><button type="submit">Back</button></Link> 
        <button type="submit">Reset</button> 
      
      </form> 
    </> 
  ); 
} 
 
export default Reset;