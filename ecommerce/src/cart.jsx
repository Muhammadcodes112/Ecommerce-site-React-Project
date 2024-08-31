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
import { Link } from 'react-router-dom'; // Make sure you import Link from 'react-router-dom'
import './cart.css'
import { FaReacteurope } from 'react-icons/fa6';
const Cart = ({ cart, setCart }) => {
    // increase qty
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1}: curElm
        }))
    }

    // decrease quantity
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1}: curElm
        }))
    }

    //Remove cart product
    const removeproduct = (product) => {
        setCart(cart.filter((x) => x.id !== product.id));
    };

    // Total Price
    // const 
    
  return (
    <div>
      <div className="cartcontainer">
        {/* Corrected condition for checking if the cart is empty */}
        {cart.length === 0 ? (
          <div className="emptycart">
            <h2 className="empty">Cart is empty</h2>
            <Link to='/product' className='emptycartbtn'>Shop Now</Link>
          </div>
        ) : (
          <div className="contant">
            {
              cart.map((curElm) => {
                return (
                  <div className="cart_item" key={curElm.id}>
                    <div className="img_box">
                      <img src={curElm.Img} alt={curElm.Title} />
                    </div>
                    <div className="detail">
                      <h4>{curElm.Cat}</h4>
                      <h3>{curElm.Title}</h3>
                      <p>Price: ${curElm.Price}</p>
                      <div className="qty">
                        <button className='incqty' onClick={() => incqty(curElm)}>+</button>
                        <input type="text" value={curElm.qty} />
                        <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                      </div>
                      <h4>Sub Total: ${curElm.Price * curElm.qty}</h4>
                      <button onClick={() => removeproduct(curElm)}><AiOutlineClose /></button>
                    </div>
                  </div>
                );
              })
            }
          </div>
        )}
        <h2 className="totalprice">

        </h2>
      </div>
    </div>
  );
}

export default Cart;
