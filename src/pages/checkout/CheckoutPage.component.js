import React from "react";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";

import './CheckoutPage.style.scss';

const CheckoutPage =()=>{
    const total =useSelector(state =>selectCartTotal(state));
    const cartItems=useSelector(state=>selectCartItems(state))
    return(
        <div className='checkout-page'>
        <div className='checkout-header'>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
      </div>
    );
    
}

export default CheckoutPage;