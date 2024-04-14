import { Router } from "express";
import { getArticulo,createPost,deletePost,putPost } from "../src/controllers/articulos.controller.js";
const router = Router();
router.get('/articulo',getArticulo)
router.post('/articulo',createPost)
router.put('/articulo/:id',putPost)
router.delete('/articulo/:id',deletePost)

export default router