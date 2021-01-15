import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {connect} from 'react-redux';
import  {CartAction}  from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';
const CartIcon = ({CartAction}) => (
    <div className='cart-icon' onClick={CartAction}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
    </div>
);

export default connect(null, {CartAction})(CartIcon);