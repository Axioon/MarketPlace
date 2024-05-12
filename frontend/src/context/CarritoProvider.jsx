import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (articulo) => {
    setCarrito((prevCarrito) => {
      const existenteIndex = prevCarrito.findIndex(item => item.id === articulo.id);
      if (existenteIndex !== -1) {
        // Si el artículo ya está en el carrito, incrementar su cantidad en 1
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito[existenteIndex].cantidad += 1;
        return nuevoCarrito;
      } else {
        // Si el artículo no está en el carrito, agregarlo con cantidad 1
        return [...prevCarrito, { ...articulo, cantidad: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (articuloId) => {
    setCarrito((prevCarrito) => {
      return prevCarrito.map(item => {
        if (item.id === articuloId) {
          // Decrementar la cantidad del artículo en uno
          if (item.cantidad > 1) {
            return { ...item, cantidad: item.cantidad - 1 };
          }
          // Si la cantidad es 1, eliminar el artículo del carrito
          return null;
        }
        return item;
      }).filter(Boolean); // Filtrar los elementos nulos (los que se eliminaron)
    });
  };

  const eliminarTodoElCarrito = () => {
    setCarrito([]);
  };

  const contarArticulos = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, eliminarTodoElCarrito, contarArticulos }}>
      {children}
    </CarritoContext.Provider>
  );
}
