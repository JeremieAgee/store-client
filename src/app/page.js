"use client";
import SnackCard from "@/components/SnackCard";
import { useStore } from "./contexts/StoreContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import AddSnack from "@/components/AddSnack";
import { useState } from "react";

export default function Home() {
  const { store, loading, updateSnack, deleteSnack, addSnack } = useStore();
  const [showNewSnack, setShowNewSnack] = useState(false);

  if (loading) {
    return <LoadingSpinner />; // Display loading spinner during data fetching
  }

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-blue-200 min-h-screen py-10">
      <div className="max-w-6xl mx-auto p-8">
        {/* Store Name */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-blue-900 tracking-wide mb-4">
            {store.name}
          </h1>
          <p className="text-xl text-gray-700 font-light">Your favorite snacks, all in one place!</p>
        </div>

        {/* Add Snack Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowNewSnack(!showNewSnack)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            {showNewSnack ? "Cancel" : "Add New Snack"}
          </button>
        </div>

        {/* Conditional Snack Form */}
        {showNewSnack && (
          <div className="mb-8">
            <AddSnack addSnack={addSnack} />
          </div>
        )}

        {/* Snacks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {store.snacks.map((snack) => (
            <SnackCard
              key={snack.id}
              snack={snack}
              updateSnack={updateSnack}
              deleteSnack={deleteSnack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}