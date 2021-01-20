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

export const removeItem = (cartItems, itemToRemove)=> {
   return cartItems.filter(item => item.id !== itemToRemove.id);
};
export const remove = (cartItems, itemToRemove)=> {
  const exists  =cartItems.find(cartitem=> cartitem.id === itemToRemove.id);
    if(exists.quantity===1)
    {
      return cartItems.filter(cartitem=> cartitem.id!== itemToRemove.id)
    }

    else{
        return cartItems.map(item => 
            item.id === itemToRemove.id ?
             {...item, quantity: item.quantity - 1}:
             item);
    }
 };