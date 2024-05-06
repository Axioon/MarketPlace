import { useState } from "react";

export function useCarrito() {
  const [error, setError] = useState(null);

  const crearCarrito = async () => {
    try {
      const response = await fetch('tu_api/crear-carrito', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: 'pendiente' }),
      });

      if (!response.ok) {
        throw new Error('No se pudo crear el carrito');
      }

      const data = await response.json();
      return data.carrito;
    } catch (error) {
      setError('Error al crear el carrito');
      console.error('Error al crear el carrito:', error);
      return null;
    }
  };

  const agregarAlCarrito = async (articuloId, usuarioId, carritoId) => {
    try {
      const response = await fetch('tu_api/agregar-al-carrito-usuario', {
        method: 'POST',
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
        throw new Error('No se pudo agregar el artículo al carrito');
      }

      return true;
    } catch (error) {
      setError('Error al agregar el artículo al carrito');
      console.error('Error al agregar el artículo al carrito:', error);
      return false;
    }
  };

  return { 
    crearCarrito,
    agregarAlCarrito,
    error
  };
}
