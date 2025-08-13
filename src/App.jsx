import React from 'react';
import ProductList from './components/ProductList';
import './styles/stayli.css';  

export default function App() {
  return (
    <div className="app-container">
      <h1>Desserts</h1>
      <ProductList />
    </div>
  );
}
