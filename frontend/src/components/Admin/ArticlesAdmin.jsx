import React, { useEffect, useState } from 'react';
import axios from '../../config/axiosConfig';

const ArticlesAdmin = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await axios.get('/articulo');
        setArticles(data.posts);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleEdit = (id) => {
    window.location.href = `/edit-article/${id}`;
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      try {
        await axios.delete(`/articulo/${id}`);
        setArticles(articles.filter(article => article.id !== id));
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }
  };

  return (
    <div className="m-5">
      <h1 className="text-lg font-bold mb-4">Administrar Artículos</h1>
      {articles.map(article => (
        <div key={article.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-md font-bold mb-2">{article.nombre}</h2>
          <p className="text-gray-700">{article.descripcion}</p>
          <button onClick={() => handleEdit(article.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2">Editar</button>
          <button onClick={() => handleDelete(article.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ArticlesAdmin;
