import React, { createContext, useState, useEffect, useReducer } from 'react';

import cartReducer from '../../reducers/cartReducer';
import {
    getCartItemsCount,
    getCartTotal
  } from '../../reducers/cart.utils';
  

const initialState={
    hidden: true,
    cartItems: [],
    itemCount: 0,
    cartTotal: 0
}

export const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer,initialState);
    const [itemCount, setitemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    
    useEffect(() => {
        setitemCount(getCartItemsCount(state.cartItems));
        setCartTotal(getCartTotal(state.cartItems));
      }, [state]);

  return (
    <CartContext.Provider
    value={{
        state,
        dispatch,
        itemCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;