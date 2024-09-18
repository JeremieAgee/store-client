"use client";

import storeAPI from "@/utils/axiosInstance";  // Ensure axiosInstance is correctly configured
import { useEffect, useState } from "react";
import SnackCard from "@/components/SnackCard";

export default function Home() {
  const [snacks, setSnacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await storeAPI.get("/snacks");  // Use async/await for better readability
        setSnacks(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch snacks.");
      }
    };

    fetchSnacks();
  }, []);  // The empty dependency array ensures it runs only once when the component mounts

  return (
    <div>
      <h1>Snacks List</h1>
      {error && <p className="text-red-600">{error}</p>}
      {snacks.length > 0 ? (
        snacks.map((snack) => (
          <SnackCard key={snack.id} snack={snack} />
        ))
      ) : (
        <p>No snacks available</p>
      )}
    </div>
  );
}