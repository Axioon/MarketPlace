import React, { useEffect, useState } from 'react';
import axios from '../../config/axiosConfig';
import { useParams } from 'react-router-dom';

const EditArticleForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria_id: '',
    precio: '',
    stock: '',
    img: ''
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data } = await axios.get(`/articulo/${id}`);
        if (data && data.post) {
          setFormData(data.post);  // Asegúrate de que este es el formato correcto de tu respuesta
        } else {
          console.error('No se encontraron datos para el artículo:', id);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
  
    fetchArticle();
  }, [id]); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/articulo/${id}`, formData);
      alert('Artículo actualizado con éxito');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block text-gray-700 text-lg font-bold mb-2">Editar Artículo</h1>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="categoria_id" value={formData.categoria_id} onChange={handleChange} placeholder="ID de Categoría" required />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="precio" value={formData.precio} onChange={handleChange} placeholder="Precio" required />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" name="img" value={formData.img} onChange={handleChange} placeholder="Imagen URL" required />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Actualizar Artículo</button>
      </form>
    </div>
  );
};

export default EditArticleForm;
