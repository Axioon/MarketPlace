import React, { useState } from "react";
import axios from '../config/axiosConfig'; // Asegúrate de que la ruta es correcta para importar la configuración de Axios

const SignIn = () => {
  const [formData, setFormData] = useState({
    correo_electronico: "", // Asegúrate de usar los nombres de campos que espera el backend
    contrasena: "",
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Envía los datos del formulario al servidor para iniciar sesión
    axios.post('/auth/login', formData)
      .then(response => {
        const { token } = response.data;
        // Guarda el token en el almacenamiento local
        localStorage.setItem('jwtToken', token);
        console.log('Inicio de sesión exitoso:', token);
        // Aquí podrías redireccionar al usuario a la página principal o donde necesites
        //window.location.href = '/'; // Cambia '/dashboard' a la ruta que quieras después del login
      })
      .catch(error => {
        console.error('Error en el inicio de sesión:', error.response.data);
        // Aquí podrías manejar errores de autenticación, como mostrar un mensaje al usuario
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo_electronico">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="correo_electronico"
            name="correo_electronico"
            value={formData.correo_electronico}
            onChange={handleChange}
            required
            placeholder="Correo Electrónico"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            placeholder="Contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default SignIn;
