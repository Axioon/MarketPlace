//articulos.routes.js

import { Router } from "express";
import { getArticulo,createPost,deletePost,putPost } from "../src/controllers/articulos.controller.js";
import { obtenerArticulosConOferta } from '../src/controllers/articulo.oferta.controller.js';

const router = Router();
router.get('/articulo',getArticulo)
router.post('/articulo',createPost)
router.put('/articulo/:id',putPost)
router.delete('/articulo/:id',deletePost)


router.get('/articulos-con-oferta', obtenerArticulosConOferta);

export default router