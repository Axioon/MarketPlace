import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import SignIn from './views/SingIn';
import Contact from './views/Contact';
import Nosotros from './views/Nosotros';
import Shop from './views/Shop';
import Articles from './views/Articles';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './views/Admin/AdminDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/acerca-de-nosotros" element={<Nosotros />} />
            <Route path="/cart" element={<Shop />} />
            <Route path="/hardware/tarjeta-de-video" element={<Articles />} />
            <Route path="/admin/*" element={<PrivateRoute roleRequired={1}>
              <AdminDashboard />
            </PrivateRoute>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
