//axios.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExampleComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Realizar la solicitud GET cuando el componente se monta
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setData(response.data); // Guardar los datos en el estado
                setLoading(false); // Cambiar el estado de carga a falso
            })
            .catch(error => {
                setError(error); // Guardar el error en el estado
                setLoading(false); // Cambiar el estado de carga a falso
            });
    }, []); // Vacío como segundo argumento para que se ejecute solo una vez al montar el componente

    if (loading) return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se realiza la solicitud

    if (error) return <p>Ocurrió un error: {error.message}</p>; // Muestra un mensaje de error si hay un error

    return (
        <div>
            <h1>Resultado de la solicitud:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre> {/* Muestra los datos obtenidos de la solicitud */}
        </div>
    );
}

export default ExampleComponent;
