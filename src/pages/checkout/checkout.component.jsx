import React from 'react';
import './checkout.styles.scss';
import {createStructuredSelector} from 'reselect';
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartPriceTotal } from "../../redux/cart/cart.selector";
import  CheckoutItem  from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button";
const CheckoutPage=({cartItems, total})=>
(
  <div className='checkout-page'>
  <div className='checkout-header'>
  <div className='header-block'>
  <span>Product</span>
  </div>
  <div className='header-block'>
  <span>Description </span>
  </div>
  <div className='header-block'>
  <span>Quantity</span>
  </div>
  <div className='header-block'>
  <span>Price</span>
  </div>
  <div className='header-block'>
  <span>Remove</span>
  </div>
  </div>
  {
        cartItems.map((item) => 
            (<CheckoutItem key={item.id} cartItem={item}/>)
    )

        }

<div className='total'>
<span>${total}</span>
</div>
<div className='test-warning'>
*Please enter the following credit card information for testing*
<br/>
4242 4242 4242 4242 - EXP: 01/21 - CVV: 123
</div>
<StripeCheckoutButton price={total}/>
  </div>  
);
const mapStateToProps= createStructuredSelector(
     { cartItems: selectCartItems,
        total: selectCartPriceTotal
    }
);
export default connect(mapStateToProps)(CheckoutPage);