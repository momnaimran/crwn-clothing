import {createSelector} from 'reselect';
 
const select= state => state.cart;
 
export const selectCartItems= createSelector(
 [select], (cart)=> cart.cartItems
 );
 export const selectCartHidden = createSelector([select], (cart)=> cart.hidden);
 export const selectCartItemsSelector= createSelector(
   [selectCartItems], cartItems => 
   cartItems.reduce((accumelator, cartItem)=> accumelator+ cartItem.quantity , 0 )
 );

 export const selectCartPriceTotal= createSelector(
   [selectCartItems], cartItems =>
   cartItems.reduce((ac, cartItem)=> ac+cartItem.quantity*cartItem.price, 0)
 );