import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axiosConfig'; // Asegúrate de que la ruta sea correcta según tu estructura de proyecto

const CreateAccount = () => {
  // Inicialización completa de todos los campos para evitar inputs no controlados
  const [formData, setFormData] = useState({
    nombre: "",
    correo_electronico: "",
    contraseña: "",
    direccion: "",
    telefono: "",
    rol_id: "2",  // Suponiendo que "2" es el rol por defecto para usuarios registrados
    repeatPassword: ""  // Campo adicional para confirmar la contraseña
  });

  const navigate = useNavigate(); // Hook para manejar la navegación programática

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.repeatPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Envía los datos al backend para registrar un nuevo usuario
    axios.post('/auth/register', {
      nombre: formData.nombre,
      correo_electronico: formData.correo_electronico,
      contraseña: formData.contraseña,
      direccion: formData.direccion,
      telefono: formData.telefono,
      rol_id: formData.rol_id
    })
    .then(response => {
      console.log("Registro exitoso:", response.data);
      navigate('/signin'); // Redirecciona al usuario a la página de inicio de sesión
    })
    .catch(error => {
      console.error("Error en el registro:", error.response);
      alert("Error al registrar usuario: " + (error.response && error.response.data.message ? error.response.data.message : ""));
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Crear Cuenta</h1>
      <form onSubmit={handleSubmit}>
        {/* Detalle de cada campo del formulario */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Tu nombre completo"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo_electronico" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="correo_electronico"
            id="correo_electronico"
            value={formData.correo_electronico}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contraseña" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            id="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="repeatPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Repetir Contraseña
          </label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirma tu contraseña"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-gray-700 text-sm font-bold mb-2">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Dirección física"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">
            Teléfono
          </label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Número de teléfono"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Registrar
        </button>
      </form>
      <div className="text-center mt-4">
        <Link to="/" className="text-indigo-500 hover:text-indigo-700">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
