import pool from "../../db/conectionDB.js";

export const createGetModelArticuloOferta = async (req, res) => {
  try {
    const articulosConOferta = await pool.query(`
      SELECT a.*, o.descuento, (a.precio - (a.precio * o.descuento / 100)) AS precio_con_descuento
      FROM articulo a
      INNER JOIN articulo_oferta ao ON a.id = ao.articulo_id
      INNER JOIN oferta o ON ao.oferta_id = o.id
    `);
    return articulosConOferta.rows;
  } catch (error) {
    throw new Error('Error obteniendo los artículos con oferta: ' + error.message);
  }
};
