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
            const myStore =  await storeAPI.get("/store"); 
            setStore(myStore.data);
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