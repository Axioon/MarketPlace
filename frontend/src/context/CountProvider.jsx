//frontend\src\context\CountProvider.jsx

import { createContext, useState } from 'react';

export const CountContext = createContext();

export function CountProvider({ children }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        phone: "",
    });
    return (
        <CountContext.Provider value={{ formData, setFormData }}>
            {children}
        </CountContext.Provider>
    );
}
