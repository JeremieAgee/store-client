// SnackCard.js
import React from 'react';

export default function SnackCard({ snack }) {
  return (
    <div className="bg-blue-100 p-5 rounded-lg shadow-lg max-w-xs mx-auto text-blue-900">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{snack.name}</h2>
      <p className="text-base mb-2">{snack.description}</p>
      <p className="text-lg font-semibold text-blue-800 mb-2">Price: ${snack.price}</p>
      <p className="text-sm text-blue-600 mb-2">Category: {snack.category}</p>
      <p className={`text-sm font-bold ${snack.inStock ? 'text-blue-600' : 'text-red-600'}`}>
        {snack.inStock ? `In stock: ${snack.count}` : 'Out of stock'}
      </p>
    </div>
  );
}