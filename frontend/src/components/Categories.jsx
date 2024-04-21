import React, { useState, useEffect } from 'react';

function Categories() {
    const [tarjetasDeVideo, setTarjetasDeVideo] = useState([]);

    useEffect(() => {
        // Simulamos una solicitud a la API para obtener los datos de las tarjetas de video
        fetch('/api/hardware')
            .then(response => response.json())
            .then(data => {
                // Filtramos los productos para obtener solo las tarjetas de video
                const tarjetasDeVideoData = data.filter(producto => producto.name === 'Tarjeta de Video');
                setTarjetasDeVideo(tarjetasDeVideoData);
            })
            .catch(error => console.error('Error al obtener las tarjetas de video:', error));
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Categoría: Tarjetas de Video</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tarjetasDeVideo.map(tarjeta => (
                    <div key={tarjeta.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{tarjeta.name}</h2>
                        <p className="text-gray-700 mb-2">Precio: ${tarjeta.price.toFixed(2)}</p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
