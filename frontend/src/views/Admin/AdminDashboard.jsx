import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddArticleForm from '../../components/Admin/AddArticleForm';
import ArticlesAdmin from '../../components/Admin/ArticlesAdmin';
import EditArticleForm from '../../components/Admin/EditArticleForm';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="add-article">Agregar Artículo</Link>
          </li>
          <li>
            <Link to="articles">Administrar Artículos</Link>
          </li>
          <li>
            <Link to="edit-article">Editar Artículo</Link> 
          </li>{/* Asumiendo que la edición será dinámica basada en ID */}
        </ul>
      </nav>
      <Routes>
        <Route path="add-article" element={<AddArticleForm />} />
        <Route path="articles" element={<ArticlesAdmin />} />
        <Route path="edit-article/:id" element={<EditArticleForm />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
