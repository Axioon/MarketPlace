import { useState, useEffect } from 'react';
import useAxios from '../hooks/useAxios.jsx';

const Cards = () => {
  const { apiCall } = useAxios();
  const [products, setProducts] = useState([]);


  //ASI SE USA EL HOOK DEL AXIOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Llama a apiCall como una función y pasa los parámetros correctamente
        const responseData = await apiCall('get', '/articulos-con-oferta');
        console.log(responseData);
        setProducts(responseData); // Actualiza el estado de productos con los datos recibidos
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // Limpia los efectos si es necesario
    return () => {
      // Código de limpieza si es necesario
    };
  }, [apiCall]); // Agrega apiCall como una dependencia del efecto



  
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
              <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
