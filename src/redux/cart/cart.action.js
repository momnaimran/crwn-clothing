import cartTypes from './cart.actiontypes';
export const CartAction = () =>({
    type: cartTypes.TOOGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
});