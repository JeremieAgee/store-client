"use client";
import SnackCard from "@/components/SnackCard";
import { useStore } from "./contexts/StoreContext";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const { store, loading } = useStore();
  
  if (loading) {
    return <LoadingSpinner />; // Show the loading spinner while loading
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Store Name */}
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{store.name}</h1>

        {/* Snacks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {store.snacks.map((snack) => (
            <SnackCard key={snack.id} snack={snack} />
          ))}
        </div>
      </div>
    </div>
  );
}