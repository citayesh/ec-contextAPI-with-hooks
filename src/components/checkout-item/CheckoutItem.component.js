import React, { useContext } from 'react';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from'./CheckoutItem.style';
import { CartContext } from '../../contexts/cart/Cart.context';

const CheckoutItem = ({ item}) => {
  const  { name, imageUrl, price, quantity } =item;
  const {dispatch} =useContext(CartContext);
  return(
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
        <div className='arrow' onClick={()=>dispatch({type:"REMOVE_ITEM",payload:item})}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>dispatch({type:"ADD_ITEM",payload:item})}>
          &#10095;
        </div>
      </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer
    onClick={()=>dispatch({type:"CLEAR_ITEM_FROM_CART",payload:item})}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
);
}
export default CheckoutItem;