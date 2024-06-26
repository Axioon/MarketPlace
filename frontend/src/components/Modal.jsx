import React, { useState, useEffect, useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCarrito } from '../hooks/useCarrito';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom'; // Importa el componente Link
import '../assets/CSS/styleCarrito.css';

export function Modal() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const { carrito, agregarAlCarrito, eliminarDelCarrito, eliminarTodoElCarrito, setCarrito } = useCarrito();
  const { authUser, setAuthUser } = useContext(AuthContext);

  // Función para abrir el modal cuando se agrega un artículo al carrito
  useEffect(() => {
    if (carrito.length > 0) {
      setModalAbierto(true);
    }
  }, [carrito]);

  // Guardar el estado del carrito en el almacenamiento local cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
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

  const handleCompra = () => {
    // Verificar si el usuario está autenticado antes de redireccionar
    if (authUser) {
      // Aquí deberías implementar la lógica para realizar la compra
      // Por ejemplo, redireccionar al usuario a la página de pago remoto
      window.location.href = 'https://pagina-de-pago-remoto.com';
    } else {
      // Si el usuario no está autenticado, redireccionarlo a la página de inicio de sesión (SignIn)
      // Utiliza el componente Link en lugar de una redirección directa
      // Esto ayudará a mantener el estado del carrito intacto
      // Importa el componente Link de react-router-dom
    }
  };

  // Calcular el precio total de todos los artículos en el carrito
  const precioTotal = carrito.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);

  return (
    <>
      <label className="Modal-button mt-3  mr-60" htmlFor="modalCheckbox">
        <ShoppingBagIcon />
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
            <Link to={authUser ? '/checkout' : '/signIn'} className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ml-2 text-sm">
              {authUser ? 'Comprar' : 'Inicia Sesión'}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
