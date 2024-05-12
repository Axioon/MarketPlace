import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider";

export function useCarrito() {
  const { carrito, agregarAlCarrito, contarArticulos,eliminarDelCarrito,eliminarTodoElCarrito} = useContext(CarritoContext);

  return {
    carrito,
    agregarAlCarrito,
    contarArticulos,
    eliminarDelCarrito,
    eliminarTodoElCarrito
  };
}
