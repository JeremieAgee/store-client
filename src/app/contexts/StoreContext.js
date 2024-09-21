"use client";
import { createContext, useContext, useEffect, useState } from 'react';
import Store from '../../utils/Store';

const StoreContext = createContext();

// Provider component to wrap your app
export const StoreProvider = ({ children }) => {
    const [store, setStore] = useState();
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const myStore = new Store("Jeremie's Store");

        const initializeStore = async () => {
            await myStore.setStore(); // Fetch data
            setStore(myStore); // Update state with the store
            setLoading(false); // Set loading to false when done
        };

        initializeStore();
    }, []);

    return (
        <StoreContext.Provider value={{ store, loading }}>
            {children}
        </StoreContext.Provider>
    );
};

// Hook to use the store
export const useStore = () => {
    return useContext(StoreContext);
};