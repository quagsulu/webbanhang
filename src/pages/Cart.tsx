// import React from 'react';
// import './Cart.css';
import './css/Cart.css'

function CartPage() {
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            <div className="cart-items">
                <div className="cart-item">
                    <img className="cart-item-image" src="https://via.placeholder.com/150" alt="Food Image" />
                    <div className="cart-item-info">
                        <h3 className="cart-item-name">Grilled Salmon</h3>
                        <p className="cart-item-price">$10.99</p>
                        <div className="cart-item-quantity">Quantity: 1</div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
                <div className="cart-item">
                    <img className="cart-item-image" src="https://via.placeholder.com/150" alt="Food Image" />
                    <div className="cart-item-info">
                        <h3 className="cart-item-name">Caesar Salad</h3>
                        <p className="cart-item-price">$8.99</p>
                        <div className="cart-item-quantity">Quantity: 2</div>
                    </div>
                    <button className="remove-button">Remove</button>
                </div>
            </div>
            <div className="cart-total">
                <h3>Total: $28.97</h3>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
}

export default CartPage;
