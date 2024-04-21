//app.jsx
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount"; 
import './App.css';
import SignIn from './views/SingIn';
import Contact from './views/Contact';
import Nosotros from './views/Nosotros';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acerca-de-nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
