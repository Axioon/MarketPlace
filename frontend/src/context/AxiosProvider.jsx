import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
    axios.defaults.baseURL = 'https://api.render.com/deploy/srv-cp01euo21fec73ft0lh0?key=kx3HKgdsbTA';

 

    const apiCall = async (method, url, data = null) => {
        try {
            const response = await axios[method](url, data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    };

    return (
        <AxiosContext.Provider value={{  apiCall }}>
            {children}
        </AxiosContext.Provider>
    );
}
