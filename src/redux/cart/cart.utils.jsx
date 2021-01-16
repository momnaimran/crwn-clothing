export const addNewItem= (cartItems, itemToAdd) => {
    const existingitem =cartItems.find(cartitem => cartitem.id === itemToAdd.id);
    if(existingitem)
    {

        return cartItems.map(item => 
            item.id === itemToAdd.id ?
             {...item, quantity: item.quantity + 1}:
             item);
                

    }
     else{
    return [...cartItems, {...itemToAdd, quantity: 1}]
     }
};