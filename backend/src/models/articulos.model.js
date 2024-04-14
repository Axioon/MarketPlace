import pool from "../../db/conectionDB.js";

export const createGetModelArticulo   = async (req,res) => {
    try {
      const allPost = await pool.query('SELECT * FROM articulo');
      return allPost.rows
      console.log(allPost);
    
    } catch (error) {
      res.status(500).json({ error: 'Error getting all posts: ' + error.message }); // Enviar el error al cliente
    }
  };


  export const createPostModelArticulo = async ({ nombre, descripcion, categoria_id, precio, stock, img }) => {
    try {
      const newPost = await pool.query(
        'INSERT INTO articulo (nombre, descripcion, categoria_id, precio, stock, img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nombre, descripcion, categoria_id, precio, stock, img]
      );
      return newPost.rows[0];
    } catch (error) {
      // Aquí no tienes acceso a res, por lo que tendrías que manejar el error de otra manera
      console.error('Error creating new post:', error.message);
      throw error; // También podrías relanzar el error para que sea manejado por el controlador de la ruta
    }
  };

  export const putPostModelArtriculo = async (id, { nombre, descripcion, categoria_id, precio, stock, img }) => {
    try {
      const refreshPost = await pool.query(
        'UPDATE articulo SET nombre=$1, descripcion=$2, categoria_id=$3, precio=$4, stock=$5, img=$6 WHERE id=$7 RETURNING *',
        [nombre, descripcion, categoria_id, precio, stock, img, id]
      );
      return refreshPost.rows[0];
    } catch (error) {
      throw new Error('Error updating post: ' + error.message);
    }
  };
  
      

      export const deletePostModelArticulo = async (id) => {
        try {
          const deletedPost = await pool.query('DELETE FROM articulo WHERE id = $1 RETURNING *', [id]);
          return deletedPost.rows[0];
        } catch (error) {
          throw new Error('Error deleting post: ' + error.message);
        }
      };