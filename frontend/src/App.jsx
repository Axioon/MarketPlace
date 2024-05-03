import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import SignIn from './views/SingIn'; // Asegúrate de que esta es la ruta correcta y el nombre del archivo
import Contact from './views/Contact';
import Nosotros from './views/Nosotros';
import Shop from './views/Shop';
import Articles from './views/Articles';
import './App.css';
import { Modal } from './components/Modal';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Modal/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Shop />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/acerca-de-nosotros" element={<Nosotros />} />
          <Route path="/hardware/tarjeta-de-video" element={<Articles />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
