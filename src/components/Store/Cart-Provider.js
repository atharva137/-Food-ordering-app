import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultcartState ={
    items: [],
    totalAmount:0
};

function cartReducer(state,action){
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount +action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }

        // const updatedItems = state.items.concat(action.item);
        return{ 
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    return defaultcartState;
}


function CartProvider(props){

    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultcartState);

    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type: 'ADD', item: item});
    };
    const removeItemToCartHandler = (id) =>{
        dispatchCartAction({type: 'REMOVE', id: id});

    };

    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartProvider;