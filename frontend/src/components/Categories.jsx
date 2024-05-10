import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCarrito } from '../hooks/useCarrito';

function Categories({ category }) {
    const [articles, setArticles] = useState([]);
    const { agregarAlCarrito } = useCarrito();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('/articulo');
                // Filtrar los artículos por categoría
                const filteredArticles = data.posts.filter(producto => producto.categoria_id === category.id);
                setArticles(filteredArticles);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchData();
    }, [category.id]);

    const handleAgregarAlCarrito = async (producto) => {
        try {
            const success = await agregarAlCarrito(producto.id, usuarioId, carritoId); 
            if (success) {
                console.log('Producto agregado al carrito');
            } else {
                console.error('Error al agregar el producto al carrito');
            }
        } catch (error) {
            console.error('Error al agregar el producto al carrito:', error);
        }
    };

    const ArticleGrid = ({ articles }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.map(producto => (
                <div key={producto.id} className="bg-white rounded-lg shadow-md">
                    <img src={producto.img} alt={producto.nombre} className="w-full h-80 object-cover object-center rounded-t-lg" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
                        <p className="text-gray-700 mb-2">Descripción: {producto.descripcion}</p>
                        <p className="text-gray-700 mb-2">Precio: ${producto.precio}</p>
                        <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => handleAgregarAlCarrito(producto)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
            <ArticleGrid articles={articles} />
        </div>
    );
}

export default Categories;
