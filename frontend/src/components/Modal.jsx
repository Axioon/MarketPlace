import { useState, useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCarrito } from '../hooks/useCarrito';
import '../assets/CSS/styleCarrito.css';

export function Modal() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { carrito, agregarAlCarrito, eliminarDelCarrito, eliminarTodoElCarrito } = useCarrito();

  // Función para abrir el modal cuando se agrega un artículo al carrito
  useEffect(() => {
    if (carrito.length > 0) {
      setModalAbierto(true);
    }
  }, [carrito]);

  const toggleModal = () => {
    setModalAbierto(!modalAbierto);
  };

  const handleAgregarProducto = (producto) => {
    agregarAlCarrito(producto);
  };

  const handleQuitarProducto = (productoId) => {
    eliminarDelCarrito(productoId);
  };

  const handleEliminarCarrito = () => {
    eliminarTodoElCarrito();
  };

  // Calcular el precio total de todos los artículos en el carrito
  const precioTotal = carrito.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);

  return (
    <>
      <label className="Modal-button mt-3  mr-60" htmlFor="modalCheckbox">
        <ShoppingBagIcon/>
      </label>

      <input id="modalCheckbox" type="checkbox" hidden checked={modalAbierto} onChange={toggleModal} />

      <aside className={`Modal ${modalAbierto ? 'open' : ''}`}>
        <div className="Modal-content">
          <ul className="Modal-list">
            {carrito.map(producto => (
              <li key={producto.id}>
                <img src={producto.img} alt={producto.nombre} />
                <footer> 
                  <small className="text-white">{producto.nombre}</small>
                  <small className="text-white">Precio: ${Number((producto.precio * producto.cantidad).toFixed(2))}</small>
                  <small className="text-white">Cantidad: {producto.cantidad}</small>
                  <button onClick={() => handleAgregarProducto(producto)} className=" bg-green-400">+</button>
                  <button onClick={() => handleQuitarProducto(producto.id)} className=" bg-red-400">-</button>
                </footer>
              </li>
            ))}
          </ul>
          <div className="Modal-footer">
            <p className="text-white   border-l-neutral-200">Precio Total: ${precioTotal.toFixed(2)}</p>
            <button onClick={handleEliminarCarrito} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Limpiar</button>
            <button className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2">Comprar</button>
          </div>
        </div>
      </aside>
    </>
  );
}
