import React from 'react';
import CustomButton from "../custom-button/custom-button";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItem from '../cart-item/cart.Item';
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom';
import { CartAction } from "../../redux/cart/cart.action";
const CartDropdown= ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        cartItems.length ?
        cartItems.map(item => <CartItem key={item.id} item={item}/>)
        : <span className='empty-message'>Your Cart Is Empty</span>
    }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(CartAction())    
    }}>Go To Checkout</CustomButton>
    </div>
);
 const mapStateToProps=createStructuredSelector({cartItems: selectCartItems});
export default withRouter(connect(mapStateToProps)(CartDropdown));