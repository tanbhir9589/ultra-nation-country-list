import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum , country) => sum + country.population , 0)
    return (
        <div>
             <h4>This is CArt : {cart.length}</h4>
             <h3>Total Population : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;