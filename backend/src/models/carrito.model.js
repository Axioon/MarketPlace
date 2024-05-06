// models/carrito.js
import pool from "../../db/conectionDB.js";

export const crearCarrito = async (estado) => {
  try {
    const query = 'INSERT INTO carrito (estado) VALUES ($1) RETURNING *';
    const values = [estado];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.error('Error al crear el carrito:', error);
    throw new Error('Error al crear el carrito');
  }
};
