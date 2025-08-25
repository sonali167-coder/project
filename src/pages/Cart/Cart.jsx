import React, { useContext } from 'react'
import './Cart.css'
import { storeContext } from '../../context/StoreContext'

const Cart = () => {
  const {cartItem, food_list, removeFromCart, cartTotal} = useContext(storeContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) =>{
          if(cartItem[item._id] > 0)
          {
            return(
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price*cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='delete'>Remove</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className='card-total-details'>
            <p>SubTotal</p>
            <p>${cartTotal()}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <b>Total</b>
            <b>${cartTotal() + 2}</b>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>If you have a promo code enter it here</div>
          <div className='cart-promo-code-input'>
            <input type='text' placeholder='promoCode' />
            <button>Submit</button>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Cart