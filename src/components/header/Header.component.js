import React, { useContext } from "react";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from  "./Header.style"
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import { auth } from "../firebase/Firebase.utils";
import CurrentUserContext from "../../contexts/current-user/CurrentUser.context";
import { CartContext } from "../../contexts/cart/Cart.context";

function Header(){
   const currentUser=useContext(CurrentUserContext)
   const  {state}  = useContext(CartContext);
   const {hidden}=state;
   return (
   <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden  ? null : <CartDropdown />}
  </HeaderContainer>
   )
};

export default Header;
