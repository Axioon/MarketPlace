//frontend\src\config\axiosConfig.jsx

import axios from 'axios';

// Crear una instancia de Axios con configuración predeterminada
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // La URL base de tu API
    headers: {
        'Content-Type': 'application/json'
    }
});

// Configurar el interceptor para incluir el token JWT en cada solicitud
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;
