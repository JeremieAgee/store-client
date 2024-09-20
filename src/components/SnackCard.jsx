import React from 'react';

export default function SnackCard({ snack }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-2">{snack.name}</h2>
      <p className="text-gray-700 mb-3">{snack.description}</p>

      {/* Price and Category */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-blue-900">${snack.price}</span>
        <span className="text-sm bg-blue-200 text-blue-900 px-2 py-1 rounded">
          {snack.category}
        </span>
      </div>

      {/* Stock Status */}
      <p className={`text-sm font-bold ${snack.inStock ? 'text-green-600' : 'text-red-600'}`}>
        {snack.inStock ? `In stock: ${snack.count}` : 'Out of stock'}
      </p>
    </div>
  );
}
