import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {connect} from 'react-redux';
import  {CartAction}  from '../../redux/cart/cart.action';
import { selectCartItemsSelector } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import './cart-icon.styles.scss';
const CartIcon = ({CartAction, itemCount}) => (
    <div className='cart-icon' onClick={CartAction}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
    </div>
);
const mapStateToProps= createStructuredSelector({
itemCount:  selectCartItemsSelector
})
export default connect(mapStateToProps, {CartAction})(CartIcon);