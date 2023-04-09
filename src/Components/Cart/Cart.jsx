import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            {cart.length}
            
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name} <button
                        onClick={()=>handleRemoveFromCart(tshirt._id)}
                    >x</button>
                </p>)
            }
        </div>
    );
};

export default Cart;