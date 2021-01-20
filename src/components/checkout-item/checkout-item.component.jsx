import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import { removeItem, addItem, remove } from "../../redux/cart/cart.action";


const CheckoutItem= ({cartItem, clearItem, remove, add})=>{ 
    const {name, quantity, price, imageUrl} = cartItem;
    return(
<div className='checkout-item'>
<div className='image-container'>
<img src={imageUrl} alt='item'/>
</div>
<span className='name'>{name}</span>
<span className='quantity'>
<div className='arrow' onClick={() => remove(cartItem)}>&#10094;</div>
<span className='value'>{quantity}</span>
<div className='arrow' onClick={()=> add(cartItem)}>&#10095;</div>
</span>
<span className='price'>{price}</span>
<div className='remove-button' onClick={() => clearItem(cartItem)}>
&#10005;</div>
</div>
)};

const mapDispathToProps= dispatch => ({
    clearItem: item => dispatch(removeItem(item)),
    remove: item => dispatch(remove(item)),
    add: item => dispatch(addItem(item))
});
export default connect(null,mapDispathToProps)(CheckoutItem);