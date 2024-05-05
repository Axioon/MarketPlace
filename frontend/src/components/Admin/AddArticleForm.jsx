import React, { useState } from 'react';
import axios from './config/axios';

const AddArticleForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria_id: '',
    precio: '',
    stock: '',
    img: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/articulo', formData);
      alert('Artículo agregado con éxito');
      setFormData({
        nombre: '',
        descripcion: '',
        categoria_id: '',
        precio: '',
        stock: '',
        img: ''
      });
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Agregar Artículo</h1>
      <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
      <input name="categoria_id" value={formData.categoria_id} onChange={handleChange} placeholder="ID de Categoría" required />
      <input name="precio" value={formData.precio} onChange={handleChange} placeholder="Precio" required />
      <input name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
      <input name="img" value={formData.img} onChange={handleChange} placeholder="Imagen URL" required />
      <button type="submit">Agregar Artículo</button>
    </form>
  );
};

export default AddArticleForm;
