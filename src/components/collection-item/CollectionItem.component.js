import React, { useContext } from 'react';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from "./CollectionItem.style"
import { CartContext } from '../../contexts/cart/Cart.context';

const CollectionItem=({item})=>{
 const {name,imageUrl,price}=item;
 const {dispatch}=useContext(CartContext)
 
    return(
            <CollectionItemContainer>
                <BackgroundImage imageUrl={imageUrl}/>
                <CollectionFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>{price}</PriceContainer>
                </CollectionFooterContainer> 
                <AddButton onClick={()=>dispatch({type:"ADD_ITEM",payload:item})} inverted>add to cart </AddButton>  
            </CollectionItemContainer>
)}


export default CollectionItem;
