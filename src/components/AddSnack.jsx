import React, { useState } from "react";

export default function AddSnack({ addSnack }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(1.0);
  const [category, setCategory] = useState("");
  const [inStock, setInStock] = useState(true);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSnack = { name, description, price, category, inStock, count };
    addSnack(newSnack);
  };

  const changeCount = (e) => setCount(Number(e.target.value));

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Add New Snack</h2>

      {/* Snack Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Snack Name"
        className="border rounded p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        required
      />

      {/* Snack Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Snack Description"
        className="border rounded p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        required
      />

      {/* Price */}
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border rounded p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        step="0.01"
        min="0.01"
        required
      />

      {/* Category */}
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="border rounded p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        required
      />

      {/* Count */}
      <input
        type="number"
        value={count}
        onChange={changeCount}
        placeholder="Count"
        className="border rounded p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        min="1"
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 w-full"
      >
        Add Snack
      </button>
    </form>
  );
}