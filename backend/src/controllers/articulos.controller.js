//backend\src\controllers\articulos.controller.js

import { createGetModelArticulo,createPostModelArticulo,putPostModelArtriculo,deletePostModelArticulo } from "../models/articulos.model.js"
import pool from "../../db/conectionDB.js"


export const  getArticulo= async (req,res)=>{
    try {
        const posts= await createGetModelArticulo()
        res.status(200).json({posts:posts})
    
    } catch (error) {
        res.status(501).json({error:error.message})
    }
    
    }

    export const createPost = async (req, res) => {
        try {
          const { nombre, descripcion, categoria_id, precio, stock, img } = req.body;
          const newPost = await createPostModelArticulo({ nombre, descripcion, categoria_id, precio, stock, img });
          res.status(201).json({ post: newPost });
        } catch (error) {
          res.status(500).json({ error: error.message });
          console.error('Error al procesar solicitud:', error);
        }
      };



      export const putPost = async (req, res) => {
        try {
          const { id } = req.params;  // Obtener el ID del post a actualizar
          const { nombre, descripcion, categoria_id, precio, stock, img } = req.body;
            console.log(id)
            console.log(req.body)

          // Actualizar el post con los datos proporcionados
          const updatedPost = await putPostModelArtriculo(id, { nombre, descripcion, categoria_id, precio, stock, img });
      
       
          // Verificar si el post se actualizó correctamente
          if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
          }
      
          console.log(updatedPost)


          // Devolver el post actualizado como respuesta
          res.status(200).json({ post: updatedPost });
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };
      



 // Controlador para eliminar un post
export const deletePost = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Verificar si hay pedidos relacionados con este artículo
      const existingOrders = await pool.query('SELECT * FROM pedido WHERE articulo_id = $1', [id]);
  
      // Si hay pedidos relacionados, eliminarlos primero
      if (existingOrders.rows.length > 0) {
        await pool.query('DELETE FROM detalle_pedido WHERE articulo_id = $1', [id]); // Eliminar registros en detalle_pedido
        await pool.query('DELETE FROM pedido WHERE articulo_id = $1', [id]); // Eliminar registros en pedido
      }
  
      // Eliminar el artículo
      const deletedPost = await deletePostModelArticulo(id);
      
      res.status(200).json({ post: deletedPost });
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error('Error al procesar solicitud:', error);
    }
  };