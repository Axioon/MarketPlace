import React, { useEffect, useState } from 'react';
import axios from './config/axios';
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
        setFormData(data.post);
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
    <form onSubmit={handleSubmit}>
      <h1>Editar Artículo</h1>
      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
      <input name="categoria_id" value={formData.categoria_id} onChange={handleChange} placeholder="ID de Categoría" required />
      <input name="precio" value={formData.precio} onChange={handleChange} placeholder="Precio" required />
      <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <input name="img" value={formData.img} onChange={handleChange} placeholder="Imagen URL" required />
      <button type="submit">Actualizar Artículo</button>
    </form>
  );
};

export default EditArticleForm;
