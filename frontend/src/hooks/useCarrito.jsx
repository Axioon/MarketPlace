import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider";

export function useCarrito() {
  const { carrito, agregarAlCarrito, contarArticulos } = useContext(CarritoContext);

  return {
    carrito,
    agregarAlCarrito,
    contarArticulos,
  };
}
