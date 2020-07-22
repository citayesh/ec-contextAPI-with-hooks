import React, { useContext } from "react";
import {ShoppingIcon,
  CartContainer,
  ItemCountContainer} from "./CartIcon.style";
import { CartContext } from "../../contexts/cart/Cart.context";


function CartIcon(){
const {itemCount,dispatch} =useContext(CartContext)
  return(
    <CartContainer onClick={() =>dispatch({type:"TOGGLE_CART_HIDDEN"})}>
        <ShoppingIcon/>
  <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
)}


export default CartIcon;