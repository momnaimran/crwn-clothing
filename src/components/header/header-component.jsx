import React from 'react';
import "./header-compoent.styles.scss";
import {ReactComponent as Logo} from '../../assests/crown.svg';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import  CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.util';
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
//import CustomButton from '../custom-button/custom-button';


const Header= ({currentUser, hidden}) =>
(
<div className="header">
<Link to="/" className="logo-container">
<Logo className="logo" />
</Link>

<div className="options">
<Link className="option" to="/shop">
SHOP
</Link>
<Link className="option" to="/contact">
CONTACT
</Link>
{
    currentUser ?
    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
    :
    <Link className="option" to='/signin'>SIGN IN</Link>
}
<CartIcon/>
</div>
{
    hidden ? null : <CartDropdown/>}
</div>
);


const mapStatetoProps = createStructuredSelector(
    {
       currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
);

export default connect(mapStatetoProps)(Header);