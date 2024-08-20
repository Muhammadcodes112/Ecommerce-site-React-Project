import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import galaxyFold6 from './assets/galaxy fold 6.png';
import galaxyFold5 from './assets/galaxy fold 6.png';
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
    </div>
  )
}

export default Home
