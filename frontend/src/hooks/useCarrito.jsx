import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider.jsx";

export function useCarrito() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  // Si el carrito es nulo o indefinido, inicialízalo como un array vacío
  const carritoActualizado = carrito || [];

  // Función para agregar un artículo al carrito del usuario
  const agregarAlCarrito = async (articulo, usuarioId, carritoId) => {
    try {
      const response = await fetch('tu_api/agregar-al-carrito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articuloId: articulo.id,
          usuarioId: usuarioId,
          carritoId: carritoId
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo agregar el artículo al carrito');
      }

      // Actualizar el estado local del carrito si es necesario
      // setCarrito([...carrito, articulo]);
    } catch (error) {
      console.error('Error al agregar el artículo al carrito:', error);
    }
  };

  // Función para eliminar un artículo del carrito del usuario
  const eliminarDelCarrito = async (articuloId, usuarioId, carritoId) => {
    try {
      const response = await fetch('tu_api/eliminar-del-carrito', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articuloId: articuloId,
          usuarioId: usuarioId,
          carritoId: carritoId
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el artículo del carrito');
      }

      // Actualizar el estado local del carrito si es necesario
      // const updatedCarrito = carrito.filter(item => item.id !== articuloId);
      // setCarrito(updatedCarrito);
    } catch (error) {
      console.error('Error al eliminar el artículo del carrito:', error);
    }
  };

  // Función para obtener los artículos del carrito del usuario
  const obtenerArticulosDelCarrito = async (usuarioId, carritoId) => {
    try {
      const response = await fetch(`tu_api/obtener-articulos-del-carrito?usuarioId=${usuarioId}&carritoId=${carritoId}`);

      if (!response.ok) {
        throw new Error('No se pudieron obtener los artículos del carrito');
      }

      const data = await response.json();
      return data.articulos;
    } catch (error) {
      console.error('Error al obtener los artículos del carrito:', error);
      return [];
    }
  };

  return { 
    carrito: carritoActualizado, 
    setCarrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    obtenerArticulosDelCarrito
  };
}

export default useCarrito;
