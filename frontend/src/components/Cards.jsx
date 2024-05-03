import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios.jsx';
import useCarrito from '../hooks/useCarrito.jsx';

const Cards = () => {
  const { apiCall } = useAxios();
  const [products, setProducts] = useState([]);
  const { carrito, setCarrito } = useCarrito();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiCall('get', '/articulos-con-oferta');
        console.log(responseData);
        setProducts(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return () => {
      // Limpia los efectos si es necesario
    };
  }, [apiCall]);

  const handleAgregarAlCarrito = async (product) => {
    // Verificar si el producto ya existe en el carrito por su ID
    const existingProduct = carrito.find(item => item.id === product.id);
    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza su cantidad
      const updatedCarrito = carrito.map(item => {
        if (item.id === product.id) {
          return { ...item, cantidad: item.cantidad + 1 };
        }
        return item;
      });
      setCarrito(updatedCarrito);
    } else {
      // Si el producto no está en el carrito, agrégalo con una cantidad inicial de 1
      setCarrito(prevCarrito => [...prevCarrito, { ...product, cantidad: 1 }]);
    }

    // Realizar la solicitud POST para agregar el producto al carrito en la base de datos
    try {
      const response = await apiCall('post', '/agregar-al-carrito', product);
      console.log('Producto agregado al carrito en la base de datos:', response);
    } catch (error) {
      console.error('Error al agregar el producto al carrito en la base de datos:', error);
    }
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
    </div>
  );
}

export default Cards;
