import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import galaxyFold6 from './assets/galaxy fold 6.png';
import galaxyFold5 from './assets/galaxy fold 6.png';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiOutlineReceiptPercent } from 'react-icons/hi';
import { BiHeadphone } from 'react-icons/bi';
import './Home.css';



const Home = () => {
  return (
    <div>
      <div className='top_banner'>
        <div className="container">
            <div className="detail">
                <h2>The Best Note Book Colletion 2023</h2>
                <Link to='/product' className='link'>Shop Now <FaArrowRightLong /></Link>
            </div>
            <div className="img_box">
                <img src={galaxyFold6} alt="galaxy fold 6" />
            </div>
        </div>
      </div>
      <div className="product_type">
         <div className="container">
            <div className="box">
                <div className="img_box">
                    <img src={galaxyFold5} alt="mobile phone" />
                </div>
                <div className="details">
                    <p>23 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src={galaxyFold5} alt="mobile phone" />
                </div>
                <div className="details">
                    <p>53 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src={galaxyFold5} alt="mobile phone" />
                </div>
                <div className="details">
                    <p>23 products</p>
                </div>
            </div>
            <div className="box">
                <div className="img_box">
                    <img src={galaxyFold5} alt="mobile phone" />
                </div>
                <div className="details">
                    <p>1B products</p>
                </div>
            </div>
         </div>
      </div>
      <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free SHipping</h3>
                        <p>Order above $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return and Refund</h3>
                        <p>Money Back Guara ntee</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HiOutlineReceiptPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discount</h3>
                        <p>On Every Order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Free SHipping</h3>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Home
