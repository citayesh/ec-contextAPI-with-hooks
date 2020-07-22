import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeCheckoutButton from '../../components/stripeButton/stripeButton.component'
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.style';
import { CartContext } from "../../contexts/cart/Cart.context";

const CheckoutPage =()=>{
    const {state,cartTotal}=useContext(CartContext);
    const{cartItems}=state;

    return(
        <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${cartTotal}</TotalContainer>
        <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={cartTotal} />
      </CheckoutPageContainer>
    );
    
}

export default CheckoutPage;