// controllers/carritoController.js
import { crearCarrito } from '../models/carrito.model.js';

export const crearNuevoCarrito = async (req, res) => {
  try {
    const { estado } = req.body;
    const nuevoCarrito = await crearCarrito(estado);
    res.status(201).json(nuevoCarrito);
  } catch (error) {
    console.error('Error al crear un nuevo carrito:', error);
    res.status(500).json({ error: 'Error al crear un nuevo carrito' });
  }
};
