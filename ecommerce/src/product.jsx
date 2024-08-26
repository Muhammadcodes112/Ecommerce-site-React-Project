import React from 'react'
import productDetail from './productdetail'
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './product.css'
const product = ({product, setProduct, detail}) => {
    
    const filterproduct = (product) =>
    {
        const update  = productDetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => {
        setProduct(productDetail)   
    }
  return (
    <div>
        <div className="product_detail">
            <div className="container">{
                detail.map((curElm) => {
                    return(
                        <div className="productbox">
                            
                        </div>
                    )
                })
                }
                <div className="productbox"></div>
            </div>
        </div>
      <div className="products">
        <h2># Products</h2> 
        <p>Home . products</p>
        <div className="container">
            <div className="filter">
                <div className="categories">
                    <h3>categories</h3>
                    <ul>
                        <li onClick={() => AllProducts ("")}>All Products</li>
                        <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
                        <li onClick={() => filterproduct ("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filterproduct ("Headphone")}>Headphone</li>
                        <li onClick={() => filterproduct ("Camera")}>Camera</li>
                        <li onClick={() => filterproduct ("Gaming")}>Gaming</li>
                    </ul>
                </div>
            </div>
            <div className="productbox">
                <div className="contant">
                    {
                        product.map((curElm) => 
                        {
                            return(
                                <>
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <img  src={curElm.Img} alt={curElm.Title} />
                                            <div className="icon">
                                                <li><AiOutlineShoppingCart /></li>
                                                <li><BsEye /></li>
                                                <li><AiOutlineHeart /></li>
                                            </div>
                                        </div>
                                        <div className="detail">
                                            <p>{curElm.Cat}</p>
                                            <h3>{curElm.Title}</h3>
                                            <h4>{curElm.Price}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default product
