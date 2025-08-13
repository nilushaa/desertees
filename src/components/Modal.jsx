import React from 'react';

export default function Modal({ closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>Order Confirmed</h3>
        <p>Your order has been placed successfully!</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}
