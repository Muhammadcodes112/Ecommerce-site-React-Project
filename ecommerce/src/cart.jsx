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
            {cart.map((curElm) => (
              <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img className='image' src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                    <div className="info">
                        <h4>{curElm.Cat}</h4>
                        <h3>{curElm.Title}</h3>
                        <p>Price: ${curElm.Price}</p>
                        <div className="qty">
                            <button className="incqty" onClick={() => incqty(curElm)}>
                            +
                            </button>
                            <input type="text" value={curElm.qty} readOnly />
                            <button className="decqty" onClick={() => decqty(curElm)}>
                            -
                            </button>
                        </div>    
                        <h4>Sub Total: ${curElm.Price * curElm.qty}</h4>
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
        )}

        {cart.length > 0 && (
          <>
            <h2 className="totalprice">Total Price: ${Totalprice.toFixed(2)}</h2>
            <button className="checkout">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
