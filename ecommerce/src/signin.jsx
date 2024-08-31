import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import './signin.css'

const signin = () => {
  return (
    <div>
      <div className="signupcontainer">
        <div className="content">
            <div className="leftbox">
                <h2>Welcome</h2>
                <div className='line'></div>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores vero. Cupiditate quos quasi, quas maxime perferendis, aliquid possimus qui blanditiis assumenda ullam, soluta repudiandae quidem repellendus nam iste. Voluptates?</h6>
                <button>Learn More</button>
            </div>
            <div className="rightbox">
                <div className="innercontent">
                    <h2>Sign In</h2>
                    <h5>User Name</h5>
                    <input type="text" placeholder='Name'/>
                    <h5>Password</h5>
                    <input type="password" placeholder='password'/>
                    <button>Submit</button>
                    <div className="socials">
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                    <h6>Don't have an account? Sign Up</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default signin
