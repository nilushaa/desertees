import React from 'react';

export default function ProductCard({ product, quantity, addToCart, decreaseQuantity }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      {quantity === 0 ? (
        <button className="add-to-cart-btn" onClick={addToCart}>
          🛒 Add to Cart
        </button>
      ) : (
        <div className="quantity-controls">
          <button className="qty-btn minus-btn" onClick={decreaseQuantity}>−</button>
          <span className="qty-number">{quantity}</span>
          <button className="qty-btn plus-btn" onClick={addToCart}>+</button>
        </div>
      )}

      <div className="product-info">
        <small className="product-category">Crème Brûlée</small>
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
