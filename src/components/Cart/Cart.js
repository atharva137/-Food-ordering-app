import React from 'react';
import reactDom from 'react-dom';
import { useContext } from 'react';

import './Cart.css';
import Modal from '../UI/Modal'
import CartContext from '../Store/cart-context';
import CartItem from './CartItem';

function Cart(props){

    const cartCtx = useContext(CartContext);
    const totalAmount = `Rs${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = useContext(CartContext);

    function cartItemRemoveHandlere(id){

    }

    function cartItemAddHandlere(item){

    }

    const cartItems = (
        <ul className="cart-items">
            {cartCtx.items.map((item) => (
            <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove={cartItemRemoveHandlere.bind(null,item.id)} 
            onAdd={cartItemAddHandlere.bind(null,item)}>
            </CartItem>))}
        </ul>
    );

    return(

        <Modal>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className="actions">
            <button className="button-alt" onClick={props.onClose}>Close </button>
                {hasItems && <button className="button--alt">Order</button>} 
            </div>
            </Modal>
    );
}

export default Cart;