import {createSelector} from 'reselect';
 
const select= state => state.cart;
 
export const selectCartItems= createSelector(
 [select], (cart)=> cart.cartItems
 );
 export const selectCartItemsSelector= createSelector(
   [selectCartItems], cartItems => 
   cartItems.reduce((accumelator, cartItem)=> accumelator+ cartItem.quantity , 0 )
 );
