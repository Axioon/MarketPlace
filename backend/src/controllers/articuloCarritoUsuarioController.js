// controllers/articuloCarritoUsuarioController.js
import { agregarAlCarrito } from '../models/articuloCarritoUsuario.js';

export const agregarArticuloAlCarrito = async (req, res) => {
  try {
    const { articuloId, carritoId, usuarioId, cantidad } = req.body;
    const resultado = await agregarAlCarrito(articuloId, carritoId, usuarioId, cantidad);
    res.status(201).json(resultado);
  } catch (error) {
    console.error('Error al agregar un artículo al carrito:', error);
    res.status(500).json({ error: 'Error al agregar un artículo al carrito' });
  }
};


