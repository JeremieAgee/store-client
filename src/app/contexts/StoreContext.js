"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import Store from '../../utils/Store';

// Create the context
const StoreContext = createContext();

// Provider component to wrap your app
export const StoreProvider = ({ children }) => {
    const [store, setStore] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const myStore = new Store("Jeremie's Store");

        // Fetch the snacks from the API (use the setStore method in the Store class)
        const initializeStore = async () => {
            await myStore.setStore(); // Fetch the data and set it in the store
            setStore(myStore); // Update the state with the store object
            setLoading(false); // Loading complete
        };

        initializeStore(); // Call the function on mount
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show a loading state while fetching
    }

    return (
        <StoreContext.Provider value={{ store }}>
            {children}
        </StoreContext.Provider>
    );
};

// Hook to use the store
export const useStore = () => {
    return useContext(StoreContext);
};