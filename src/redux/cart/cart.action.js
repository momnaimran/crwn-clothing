import cartTypes from './cart.actiontypes';
export const CartAction = () =>({
    type: cartTypes.TOOGLE_CART_HIDDEN
});
export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
});
export const removeItem = item => ({
    type:cartTypes.REMOVE_ITEM_FROM_CART,
    payload:item
});
export const remove = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
});