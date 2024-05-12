import { useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCarrito } from '../hooks/useCarrito';
import '../assets/CSS/styleCarrito.css';

export function Modal() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { carrito, agregarAlCarrito } = useCarrito();

  const toggleModal = () => {
    setModalAbierto(!modalAbierto);
  };

  const handleAgregarProducto = (producto) => {
    agregarAlCarrito(producto);
  };

  const handleQuitarProducto = (productoId) => {
    // Lógica para quitar un producto del carrito
  };

  return (
    <>
      <label className="Modal-button mt-3  mr-60" htmlFor="modalCheckbox">
        <ShoppingBagIcon/>
      </label>

      <input id="modalCheckbox" type="checkbox" hidden checked={modalAbierto} onChange={toggleModal} />

      {modalAbierto && (
        <aside className="Modal">
          <div className="Modal-content">
            <ul>
              {carrito.map(producto => (
                <li key={producto.id}>
                  <img src={producto.img} alt={producto.nombre} />
                  <footer> 
                    <small className="text-white">{producto.nombre}</small>
                    <small className="text-white">Cantidad: {producto.cantidad}</small>
                    <button onClick={() => handleAgregarProducto(producto)} className=" bg-green-400">+</button>
                    <button onClick={() => handleQuitarProducto(producto.id)} className=" bg-red-400">-</button>
                  </footer>
                </li>
              ))}
            </ul>
            <button>Limpiar</button>
          </div>
        </aside>
      )}
    </>
  );
}
