//axios.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/v1')
            .then(response => {
                setData(response.data); 
                setLoading(false);
            })
            .catch(error => {
                setError(error); 
                setLoading(false); 
            });
    }, []);

    if (loading) return <p>Cargando...</p>; 

    if (error) return <p>Ocurrió un error: {error.message}</p>; 

    return (
        <div>
            <h1>Resultado de la solicitud:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> 
        </div>
    );
}

export default AxiosComponent;
