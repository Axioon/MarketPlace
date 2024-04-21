import pool from "../../db/conectionDB.js";

export const createGetModelArticuloOferta = async (req,res) => {
  try {
    const articulosConOferta = await pool.query('SELECT * FROM articulo WHERE id IN (SELECT articulo_id FROM articulo_oferta)');
    console.log(articulosConOferta)
    return articulosConOferta.rows;
  } catch (error) {
    res.status(500).json({ error: 'Error getting all posts: ' + error.message }); // Enviar el error al cliente
  }
};
