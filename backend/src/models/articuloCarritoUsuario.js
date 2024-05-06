// models/articuloCarritoUsuario.js
import pool from "../../db/conectionDB.js";

export const agregarAlCarrito = async (articuloId, carritoId, usuarioId, cantidad) => {
  try {
    const query = 'INSERT INTO articulo_carrito_usuario (articulo_id, carrito_id, usuario_id, cantidad) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [articuloId, carritoId, usuarioId, cantidad];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error al agregar el artículo al carrito del usuario:', error);
    throw new Error('Error al agregar el artículo al carrito del usuario');
  }
};
