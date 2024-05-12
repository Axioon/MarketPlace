import React, { createContext } from 'react';
import axios from 'axios';

export const AxiosContext = createContext();

export function AxiosProvider({ children }) {
    // Obtén la URL base de la API desde una variable de entorno
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    axios.defaults.baseURL = apiUrl;

    const apiCall = async (method, url, data = null) => {
        try {
            const response = await axios[method](url, data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    };

    return (
        <AxiosContext.Provider value={{ apiCall }}>
            {children}
        </AxiosContext.Provider>
    );
}
