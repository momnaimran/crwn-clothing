import React from 'react';
import "./header-compoent.styles.scss";
import {ReactComponent as Logo} from '../../assests/crown.svg';
import { connect } from "react-redux";
import  CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.util';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { HeaderContainer, OptionLink, OptionsContainer, LogoContainer } from "./header.styles";
//import CustomButton from '../custom-button/custom-button';


const Header= ({currentUser, hidden}) =>
(
<HeaderContainer>
<LogoContainer to="/">
<Logo className="logo" />
</LogoContainer>

<OptionsContainer>
<OptionLink to="/shop">
SHOP
</OptionLink>
<OptionLink to="/contact">
CONTACT
</OptionLink>
{
    currentUser ?
    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
    :
    <OptionLink to='/signin'>SIGN IN</OptionLink>
}
<CartIcon/>
</OptionsContainer>
{
    hidden ? null : <CartDropdown/>}
</HeaderContainer>
);


const mapStatetoProps = createStructuredSelector(
    {
       currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
);

export default connect(mapStatetoProps)(Header);