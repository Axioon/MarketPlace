//frontend\src\views\SingIn.jsx

import React, { useState, useContext } from 'react';
import axios from '../config/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SignIn = () => {
  const [formData, setFormData] = useState({
    correo_electronico: "",
    contrasena: "",
  });
  const navigate = useNavigate();
  const { setAuthUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', formData)
      .then(response => {
        const { token, user } = response.data;
        localStorage.setItem('jwtToken', token);
        setAuthUser(user);
        if (user.rol_id === 1) {
          alert(`Bienvenido ${user.nombre} a la vista de Administrador de AxiosTechnology`);
          navigate('/admin');
        } else {
          alert(`Bienvenido ${user.nombre}`);
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error en el inicio de sesión:', error.response.data);
        alert('Error en el inicio de sesión: ' + error.response.data.message);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="correo_electronico" className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="correo_electronico"
            value={formData.correo_electronico}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contrasena" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default SignIn;
