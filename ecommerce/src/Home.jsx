import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import galaxyFold6 from './assets/galaxy fold 6.png';
import galaxyFold5 from './assets/galaxy fold 6.png';
import appleipad from './img/appleipad.png';


import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar, BsEye, BsArrowRight } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
// import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Homeproduct from './Homeproduct';
import './Home.css';

const Home = ({detail, view, close, setClose, addtocart}) => {
    
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
                        <CiPercent />
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
                        <h3>Customer Support</h3>
                        <p>Every Time Call Support</p>
                    </div>
                </div>
            </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
            {
                Homeproduct.map((curElm) =>
                {
                    return(
                        <div className="box" key={curElm.id}>
                            <div className="img_box">
                                <img  src={curElm.Img} alt={curElm.Title} />
                                <div className="icon">
                                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                    <li onClick={() => view (curElm)}><BsEye /></li>
                                    <li><AiOutlineHeart /></li>
                                </div>
                            </div>
                            <div className="detail">
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>${curElm.Price}</h4>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
      <div className="banner">
        <div className="container">
            <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Apple Ipad 10.2 9th Gen - 2021</h3>
           <div className="me">
                <p>$ 986</p>
                <Link to='/product' className='link'> Shop Now     <BsArrowRight /></Link>
           </div>
        </div>
        <div className="img_box">
            <img className='images' image src={appleipad} alt="slider-img" />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
