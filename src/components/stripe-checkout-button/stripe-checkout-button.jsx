import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
   
    const priceForStripe = price *100;
    const publishKey='pk_test_51IDd5hL9Onj4In2CjU2owDOF2t1oKvgRoDaejcGAOtFSOocKFczi6NSDHL9Vz62v0DkmgGrDs207Q7e7YdYy27SF009GDn3ybv';
     const onToken =token => {
         console.log(token);
         alert('Payment Successful');
     }
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing LTD.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total cost is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishKey}
        />
    )

} 

export default StripeCheckoutButton;