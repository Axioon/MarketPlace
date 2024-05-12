import { createContext, useState } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (articulo) => {
    setCarrito((prevCarrito) => {
      const existenteIndex = prevCarrito.findIndex(item => item.id === articulo.id);
      if (existenteIndex !== -1) {
        const nuevoCarrito = [...prevCarrito];
        nuevoCarrito[existenteIndex].cantidad += 1;
        return nuevoCarrito;
      } else {
        return [...prevCarrito, { ...articulo, cantidad: 1 }];
      }
    });
  };

  const contarArticulos = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, contarArticulos }}>
      {children}
    </CarritoContext.Provider>
  );
}
