"use client";
import React, { useState } from 'react';
import UpdateSnack from './UpdateSnack';

export default function SnackCard({ snack, updateSnack, deleteSnack }) {
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div>
      {showUpdate ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <div className="mt-4 flex space-x-3">
            <UpdateSnack 
              snack={snack} 
              updateSnack={updateSnack} 
              deleteSnack={deleteSnack} 
            />
          </div>
          <button
            onClick={() => setShowUpdate(!showUpdate)}
            className="mt-4 bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition-colors duration-200"
          >
            Cancel Update/Delete
          </button>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">{snack.name}</h2>
          <p className="text-gray-700 mb-3">{snack.description}</p>

          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-blue-900">${snack.price}</span>
            <span className="text-sm bg-blue-200 text-blue-900 px-2 py-1 rounded">
              {snack.category}
            </span>
          </div>

          <p className={`text-sm font-bold ${snack.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {snack.inStock ? `In stock: ${snack.count}` : 'Out of stock'}
          </p>

          <button
            onClick={() => setShowUpdate(!showUpdate)}
            className="mt-4 bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition-colors duration-200"
          >
            Update/Delete
          </button>
        </div>
      )}
    </div>
  );
}