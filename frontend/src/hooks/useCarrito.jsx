import { useContext } from "react";
import { CarritoContext } from "../context/CarritoProvider.jsx";

export function useCarrito() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  return { carrito, setCarrito };
}

export default useCarrito;
