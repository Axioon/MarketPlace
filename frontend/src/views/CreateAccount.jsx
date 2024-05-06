import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../config/axiosConfig';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo_electronico: "",
    contraseña: "",
    direccion: "",
    telefono: "",
    rol_id: "2" // Por defecto, asignamos el rol de usuario regular (ajusta según tu lógica de negocio)
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', formData);
      alert('Registro exitoso');
      navigate('/signin'); // Redirecciona al inicio de sesión tras el registro exitoso
    } catch (error) {
      console.error("Error en el registro:", error.response);
      alert("Error al registrar usuario: " + (error.response?.data?.message || "Error desconocido"));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Crear Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre Completo</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="correo_electronico" className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
          <input type="email" name="correo_electronico" value={formData.correo_electronico} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="contraseña" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
          <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-gray-700 text-sm font-bold mb-2">Dirección</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">Teléfono</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrar</button>
      </form>
      <div className="text-center mt-4">
        <Link to="/signin" className="text-blue-500 hover:text-blue-700">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
};

export default CreateAccount;
