// import {React, useState }from 'react'
// import productDetail from './productdetail'
// import { BsEye } from 'react-icons/bs';
// import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import './product.css'

// const product = ({product, setProduct, detail, view, close, setClose  }) => {
//     const [isclose, setIsClose ] = useState(false)
    
//     const filterproduct = (product) =>
//     {
//         const update  = productDetail.filter((x) =>
//         {
//             return x.Cat === product;
//         })
//         setProduct(update);
//     }
//     const AllProducts = () => {
//         setProduct(productDetail)   
//     }
//   return (
//     <div>
//         {
//             close ?
//             <div className="product_detail">
//             <div className="container">
//             <button onClick={() => setIsClose(false)} className='closebtn'><AiOutlineCloseCircle /> Close
// </button>

//                 {
//                 detail.map((curElm) => {
//                     return(
//                         <div className="productbox">
//                             <div className="img-box">
//                                 <img src={curElm.Img} alt={curElm.Title} />
//                             </div>
//                             <div className="detail">
//                                 <h4>{curElm.Title}</h4>
//                                 <h2>{curElm.Title}</h2>
//                                 <p>A screen Everyone Will Love: Wheter  your family is streaming or video chatting with friends tablet AB...</p>
//                                 <h3>{curElm.Price}</h3>
//                                 <button>Add To Cart</button>
//                             </div>
//                         </div>
//                     )
//                 })
//                 }
//                 <div className="productbox"></div>
//             </div>
//         </div> : null
//         }
//         {/* <div className="product_detail">
//             <div className="container">
//                 <button onClick={setClose(false) }><AiOutlineCloseCircle /></button>
//                 {
//                 detail.map((curElm) => {
//                     return(
//                         <div className="productbox">
//                             <div className="img-box">
//                                 <img src={curElm.Img} alt={curElm.Title} />
//                             </div>
//                             <div className="detail">
//                                 <h4>{curElm.Title}</h4>
//                                 <h2>{curElm.Title}</h2>
//                                 <p>A screen Everyone Will Love: Wheter  your family is streaming or video chatting with friends tablet AB...</p>
//                                 <h3>{curElm.Price}</h3>
//                                 <button>Add To Cart</button>
//                             </div>
//                         </div>
//                     )
//                 })
//                 }
//                 <div className="productbox"></div>
//             </div>
//         </div> */}
//       <div className="products">
//         <h2># Products</h2> 
//         <p>Home . products</p>
//         <div className="container">
//             <div className="filter">
//                 <div className="categories">
//                     <h3>categories</h3>
//                     <ul>
//                         <li onClick={() => AllProducts ("")}>All Products</li>
//                         <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
//                         <li onClick={() => filterproduct ("Smart Watch")}>Smart Watch</li>
//                         <li onClick={() => filterproduct ("Headphone")}>Headphone</li>
//                         <li onClick={() => filterproduct ("Camera")}>Camera</li>
//                         <li onClick={() => filterproduct ("Gaming")}>Gaming</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="productbox">
//                 <div className="contant">
//                     {
//                         product.map((curElm) => 
//                         {
//                             return(
//                                 <>
//                                     <div className="box" key={curElm.id}>
//                                         <div className="img_box">
//                                             <img  src={curElm.Img} alt={curElm.Title} />
//                                             <div className="icon">
//                                                 <li><AiOutlineShoppingCart /></li>
//                                                 <li onClick={() => view (curElm)}><BsEye /></li>
//                                                 <li><AiOutlineHeart /></li>
//                                             </div>
//                                         </div>
//                                         <div className="detail">
//                                             <p>{curElm.Cat}</p>
//                                             <h3>{curElm.Title}</h3>
//                                             <h4>{curElm.Price}</h4>
//                                         </div>
//                                     </div>
//                                 </>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default product
























import { React, useState } from 'react';
import productDetail from './productdetail';
import { BsEye } from 'react-icons/bs';
import { AiOutlineCloseCircle, AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './product.css';

const Product = ({ product, setProduct, detail, view, close, setClose }) => {
  const [isClose, setIsClose] = useState(close);
  
  const filterProduct = (product) => {
    const update = productDetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const allProducts = () => {
    setProduct(productDetail);   
  };

  return (
    <div>
      {close && (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className='closebtn'>
              <AiOutlineCloseCircle />
            </button>

            {detail.map((curElm) => {
              return (
                <div className="productbox" key={curElm.id}>
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Title}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet AB...</p>
                    <h3>{curElm.Price}</h3>
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
            <div className="productbox"></div>
          </div>
        </div>
      )}

      <div className="products">
        <h2># Products</h2> 
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => allProducts()}>All Products</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch")}>Smart Watch</li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => (
                <div className="box" key={curElm.id}>
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                    <div className="icon">
                      <li><AiOutlineShoppingCart /></li>
                      <li onClick={() => view(curElm)}><BsEye /></li>
                      <li><AiOutlineHeart /></li>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.Cat}</p>
                    <h3>{curElm.Title}</h3>
                    <h4>{curElm.Price}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
