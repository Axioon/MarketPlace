import React, { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios.jsx';
import { useCarrito } from '../hooks/useCarrito.jsx';

const Cards = () => {
  const { apiCall } = useAxios();
  const [products, setProducts] = useState([]);
  const { agregarAlCarrito, contarArticulos } = useCarrito();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiCall('get', '/articulos-con-oferta');
        setProducts(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // No necesitas limpiar los efectos en este caso
  }, [apiCall]);

  const handleAgregarAlCarrito = (product) => {
    agregarAlCarrito(product);
    console.log('Producto agregado al carrito:', product);
    console.log('Cantidad total de artículos en el carrito:', contarArticulos()); // Aquí se muestra el conteo
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={product.img} alt={product.nombre} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.nombre}</h2>
            <p className="text-gray-600">{product.descripcion}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-semibold">
                ${parseFloat(product.precio_con_descuento).toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">${product.precio}</span>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700" onClick={() => handleAgregarAlCarrito(product)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-gray-700">Total de artículos en el carrito: {contarArticulos()}</p>
      </div>
    </div>
  );
}

export default Cards;
