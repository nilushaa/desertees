import React from 'react';
import { useCart } from '../contexts/CartContext';
import cartImage from '../assets/cart-image.jpg';  

export default function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-card">
      <div className="cart-card-header">
        <h2>Your Cart ({cart.length})</h2>  {/* "Your Cart" text aligned to the left */}
        <img src={cartImage} alt="Cart" className="cart-card-image" />  {/* Image aligned to the right */}
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart-message">Cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <div>{item.name} (${item.price.toFixed(2)})</div>
                <div className="qty-controls">
                  <button onClick={() => dispatch({ type: 'DECREASE_QTY', payload: item.id })}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'INCREASE_QTY', payload: item.id })}>+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>❌</button>
                </div>
              </div>
              <img src={item.image} alt={item.name} className="cart-item-image" />
            </li>
          ))}
        </ul>
      )}

      <hr />
      <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
    </div>
  );
}
