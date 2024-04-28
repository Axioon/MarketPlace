//articulos.routes.js

import express from 'express';
import { getArticulo,createPost,deletePost,putPost } from "../src/controllers/articulos.controller.js";
import { obtenerArticulosConOferta } from '../src/controllers/articulo.oferta.controller.js';
import { registerUser, loginUser } from '../src/controllers/auth.controller.js';

const router = express.Router();

router.get('/articulo',getArticulo)
router.post('/articulo',createPost)
router.put('/articulo/:id',putPost)
router.delete('/articulo/:id',deletePost)

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);


router.get('/articulos-con-oferta', obtenerArticulosConOferta);

export default router