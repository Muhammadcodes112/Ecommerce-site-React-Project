import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import './footer.css';

const footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                    <img src="./src.img/logo.png" alt="logo" />
                </div>
                <div className="detail">
                    <p>We are a team of designers and developers that create high quality</p>
                    <div className="icon">
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className="account">
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className="page">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms and Condition</li>
                </ul>
            </div>
      </div>
      </div>
    </div>
  )
}

export default footer
