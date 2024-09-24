import React, { useState } from 'react';
import DeleteSnack from './DeleteSnack';


export default function UpdateSnack({ snack, updateSnack, deleteSnack }) {
  const [name, setName] = useState(snack.name);
  const [description, setDescription] = useState(snack.description);
  const [price, setPrice] = useState(snack.price);
  const [category, setCategory] = useState(snack.category);
  const [inStock, setInStock] = useState(snack.inStock);
  const [count, setCount] = useState(snack.count);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSnack = { ...snack, name, description, price, category, inStock, count };
    updateSnack(updatedSnack);
  };
  const changeCount = (e) => {
    const newCount = Number(e.target.value); // Convert the input value to a number
    setCount(newCount);

    if (newCount === 0 && inStock) {
      setInStock(false);
    } else if (newCount > 0 && !inStock) {
      setInStock(true);
    }
  };
  const changeStock = (e) => {
    let newStock = true;
    if (e.target.value === "false") {
      newStock = false;
    }
    setInStock(newStock);
    if (!newStock) {
      setCount(0);
    } else if (newStock) {
      setCount(1);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Update Snack</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Snack Name"
        className="border rounded p-2 mb-3 w-full"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Snack Description"
        className="border rounded p-2 mb-3 w-full"
        required
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="border rounded p-2 mb-3 w-full"
        step="0.01"
        required
      />

      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="border rounded p-2 mb-3 w-full"
        required
      />
      <input
        type="number"
        value={count}
        onChange={(e) => { changeCount(e) }}
        placeholder="Count"
        className="border rounded p-2 mb-3 w-full"
        min={0}
        required
      />
      <select
        value={inStock}
        onChange={(e) => changeStock(e)}
        className="border rounded p-2 mb-3 w-full"
      >
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition-colors duration-200">
        Update Snack
      </button>

      <DeleteSnack snack={snack} deleteSnack={deleteSnack} />
    </form>
  );
}