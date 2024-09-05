// import React from 'react'
// import { AiOutlineClose } from 'react-icons/ai'
// const Cart = ({cart, setCart}) => {
//   return (
//     <div>
//       <div className="container">
//         {Cart.length === 0 &&  
//         <div className="emptycart">
//             <h2 className="empty"> Cart is empty</h2>
//             <Link to='/product'>Shop Now</Link>
//         </div>
//         }
//         <div className="contant">
//             {
//                 cart.map((curElm) => {
//                     return(
//                         <div className="cart_item" key={curElm.id}>
//                             <div className="img_box">
//                                 <img src={curElm.Img} alt="curElm.Title" />
//                             </div>
//                             <div className="detail">
//                                 <h4>{curElm.Cat}</h4>
//                                 <h3>{curElm.Title}</h3>
//                                 <p>{curElm.Price}</p>
//                                 <button><AiOutlineClose /> </button>
//                             </div>
//                           </div>
//                     )
//                 })
//             }
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart




import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IoRemoveOutline } from "react-icons/io5";
import './cart.css';

const Cart = ({ cart, setCart }) => {
  // Increase quantity
  const incqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty + 1 } : curElm
      )
    );
  };

  // Decrease quantity
  const decqty = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    setCart(
      cart.map((curElm) =>
        curElm.id === product.id ? { ...exist, qty: exist.qty - 1 } : curElm
      )
    );
  };

  // Remove product from cart
  const removeproduct = (product) => {
    setCart(cart.filter((x) => x.id !== product.id));
  };

  // Calculate total price
  const Totalprice = cart.reduce((total, curElm) => total + curElm.Price * curElm.qty, 0);

  return (
    <div>
      <div className="cartcontainer">
      
        {cart.length === 0 ? (
          <div className="emptycart">
            <h2 className="empty">Cart is empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="contant">
            <div className="inner-content">
            <h1 className='tag'>Shopping Cart.</h1>
            {cart.map((curElm) => (
              <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img className='image' src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                    <div className="info">
                        <h4>{curElm.Cat}</h4>
                        <h5>{curElm.Title}</h5>
                        <div className="qty">
                            <button className="incqty" onClick={() => incqty(curElm)}>+</button>
                            <input type="text" value={curElm.qty} readOnly />
                            <button className="decqty" onClick={() => decqty(curElm)}>-</button>
                        </div>   
                        <p>Price: ${curElm.Price}</p> 
                        
                    </div>
                    <div className="close">
                        <button onClick={() => removeproduct(curElm)}>
                            <AiOutlineClose />
                        </button>
                     </div>
                </div>
              </div>
              
            ))}
            </div>



            <div className="payment">
                <h2>Payment Info</h2>
                <h6>Payment Method:</h6>
                <div className='btnbox'>
                    <button className='btn'>Credit Card</button>
                    <button className='btn'>Paypal</button>
                </div>
                <h6>Name On Card</h6>
                <input type="text" />
                <h6>Card Number</h6>
                <input type="number" />
                <div className="date">
                    <div>
                        <h6>Expiration Date:</h6>
                        <input type="date" />
                    </div>
                    <div>
                        <h6>CVV:</h6>
                        <input type="number" />
                    </div>
                </div>
                
                {/* {cart.map((curElm) => (
                    <h4 className='subtotal'>Sub Total: ${curElm.Price * curElm.qty}</h4>
                ))} */}

                <div className="totalcheckoutbutton">
                    {cart.length > 0 && (
                        <>
                            <h5 className="totalprice">Total: ${Totalprice.toFixed(2)}</h5>
                            <button className="checkout" >Checkout</button>
                        </>
                    )}
                </div>
            </div>
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Cart;
