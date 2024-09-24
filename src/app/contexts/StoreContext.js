"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import storeAPI from '@/utils/axiosInstance';

const StoreContext = createContext();

// Provider component to wrap your app
export const StoreProvider = ({ children }) => {
    const [store, setStore] = useState();
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const initializeStore = async () => {
            const myStore = await storeAPI.get("/store"); 
            setStore(myStore.data);
            setLoading(false); // Set loading to false when done
        };

        initializeStore();
    }, []);
    const addSnack = async (newSnack) => {
        const addedSnack = await storeAPI.post("/snacks", newSnack);
        setStore((prevStore) => ({
            ...prevStore,
            snacks: [...prevStore.snacks, newSnack]
        }));
    };
    // Function to update a snack
    const updateSnack = async (updatedSnack) => {
        try {
            await storeAPI.put(`/snacks/${updatedSnack.id}`, updatedSnack); // Update API endpoint
            setStore((prevStore) => ({
                ...prevStore,
                snacks: prevStore.snacks.map(snack =>
                    snack.id === updatedSnack.id ? updatedSnack : snack
                ),
            }));
        } catch (error) {
            console.error("Failed to update snack:", error);
        }
    };

    // Function to delete a snack
    const deleteSnack = async (snackId) => {
        try {
            await storeAPI.delete(`/snacks/${snackId}`); // Delete API endpoint
            setStore((prevStore) => ({
                ...prevStore,
                snacks: prevStore.snacks.filter(snack => snack.id !== snackId),
            }));
        } catch (error) {
            console.error("Failed to delete snack:", error);
        }
    };

    return (
        <StoreContext.Provider value={{ store, loading, updateSnack, deleteSnack, addSnack }}>
            {children}
        </StoreContext.Provider>
    );
};

// Hook to use the store
export const useStore = () => {
    return useContext(StoreContext);
};