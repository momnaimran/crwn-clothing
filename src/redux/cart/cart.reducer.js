import { addNewItem } from "./cart.utils";
import { remove } from "./cart.utils";
import { removeItem } from "./cart.utils";
import cartTypes from './cart.actiontypes';
const INITIAL_STATE={
    hidden:true,
    cartItems : []
};

const CartReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case cartTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems :addNewItem(state.cartItems, action.payload)
                };
               case cartTypes.REMOVE_ITEM_FROM_CART:
                   return{
                      ...state,
                      cartItems: removeItem(state.cartItems, action.payload)
                   };
                   case cartTypes.REMOVE_ITEM:
                    return{
                       ...state,
                       cartItems: remove(state.cartItems, action.payload)
                    };
        default:
            return state;
    }
};
export default CartReducer;