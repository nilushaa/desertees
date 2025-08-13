import React, { useState } from 'react';
import ProductCard from './ProductCard';

import img1 from '../assets/Item Image.jpg';
import img2 from '../assets/Item Image (4).png';
import img3 from '../assets/Item Image (5).png';
import img4 from '../assets/Item Image (6).png';
import img5 from '../assets/Item Image (7).png';
import img6 from '../assets/Item Image (8).png';
import img7 from '../assets/Item Image (9).png';
import img8 from '../assets/Item Image (10).png';
import img9 from '../assets/Item Image (11).png';

const products = [
  { id: 1, name: 'Waffle with Berries', price: 6.5, image: img1 },
  { id: 2, name: 'Vanilla Bean Crème Brûlée', price: 4.0, image: img2 },
  { id: 3, name: 'Macaron Medley', price: 5.0, image: img3 },
  { id: 4, name: 'Tiramisu Tiramisu', price: 5.0, image: img4 },
  { id: 5, name: 'Baklava', price: 3.5, image: img5 },
  { id: 6, name: 'Mango Pie', price: 4.5, image: img6 },
  { id: 7, name: 'Red Velvet Cake', price: 5.5, image: img7 },
  { id: 8, name: 'Salted Caramel Brownie', price: 6.0, image: img8 },
  { id: 9, name: 'Vanilla Panna Cotta', price: 3.5, image: img9 },
];

export default function ProductList() {
  const [cart, setCart] = useState({}); 

  const addToCart = (product) => {
    setCart(prevCart => {
      const quantity = prevCart[product.id] || 0;
      return { ...prevCart, [product.id]: quantity + 1 };
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      const quantity = prevCart[productId];
      if (!quantity) return prevCart;

      if (quantity === 1) {
        const newCart = { ...prevCart };
        delete newCart[productId];
        return newCart;
      }
      return { ...prevCart, [productId]: quantity - 1 };
    });
  };
<h1>Dessert</h1>
  return (
    <div className="app-container">
      <div className="product-list-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            addToCart={() => addToCart(product)}
            decreaseQuantity={() => decreaseQuantity(product.id)}
          />
        ))}
      </div>

      <div className="cart-container">
        <h2>Your Cart</h2>
        {Object.keys(cart).length === 0 && <p>Cart is empty.</p>}
        {Object.entries(cart).map(([productId, quantity]) => {
          const product = products.find(p => p.id === parseInt(productId));
          return (
            <div key={productId} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{product.name}</h4>
                <p><strong>{quantity}x</strong> @{product.price.toFixed(2)} = ${(product.price * quantity).toFixed(2)}</p>
              </div>
              <button className="remove-cart-btn" onClick={() => removeFromCart(product.id)}>×</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
