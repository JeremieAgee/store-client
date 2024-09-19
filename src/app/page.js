"use client";
import SnackCard from "@/components/SnackCard";
import { useStore } from "./contexts/StoreContext";


export default function Home() {
  const { store }= useStore();

  return (
    <div>
        {store.snacks.map((snack) => {
          // console.log(data);
          return <SnackCard key={snack.id} snack={snack} />;
        })}
    </div>
  );
}