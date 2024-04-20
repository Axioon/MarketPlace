//app.jsx
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
    <Navbar />
    
    <Routes>
      <Route
        path="/"
        element={<Footer/>}
      />
      <Route
        path="/favoritos"
        element={<Footer/>}
      />
    </Routes>
    </div>
    
  );
}

export default App;
