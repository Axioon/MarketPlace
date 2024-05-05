import React, { useEffect, useState } from 'react';
import axios from './config/axios';

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

  return (
    <div>
      <h1>Administrar Artículos</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.nombre}</h2>
          <p>{article.descripcion}</p>
          <button onClick={() => handleEdit(article.id)}>Editar</button>
          <button onClick={() => handleDelete(article.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );

  function handleEdit(id) {
    window.location.href = `/edit-article/${id}`;
  }

  async function handleDelete(id) {
    if (window.confirm('¿Estás seguro de que quieres eliminar este artículo?')) {
      try {
        await axios.delete(`/articulo/${id}`);
        setArticles(articles.filter(article => article.id !== id));
      } catch (error) {
        console.error('Error deleting article:', error);
      }
    }
  }
};

export default ArticlesAdmin;
