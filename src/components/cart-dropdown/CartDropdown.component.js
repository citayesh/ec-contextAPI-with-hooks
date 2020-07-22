import React, { useContext } from "react";
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from "./CartDropdown.style";
import CartItem from "../cart-item/CartItem.componenet";
import { withRouter } from "react-router-dom";
import { CartContext} from "../../contexts/cart/Cart.context"

function CartDropdown({history}){
const {state,dispatch}=useContext(CartContext);
const {cartItems}=state;
    return(
    <CartDropdownContainer>
            <CartItemsContainer>
                {
                cartItems.length ?
               (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>))
                :
            (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )

                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=>{history.push('/checkout')
        dispatch({type:"TOGGLE_CART_HIDDEN"})
        }}>GO TO CHECKOUT</CartDropdownButton>   
    </CartDropdownContainer>
    )}
export default withRouter(CartDropdown);