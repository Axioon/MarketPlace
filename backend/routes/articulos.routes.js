//backend\routes\articulos.routes.js

import express from 'express';
import { getArticulo,createPost,deletePost,putPost } from "../src/controllers/articulos.controller.js";
import { obtenerArticulosConOferta } from '../src/controllers/articulo.oferta.controller.js';
import { registerUser, loginUser } from '../src/controllers/auth.controller.js';

import { crearNuevoCarrito } from '../src/controllers/carritoController.js';
import { agregarArticuloAlCarrito } from '../src/controllers/articuloCarritoUsuarioController.js';
import { obtenerUsuarios } from '../src/controllers/auth.controller.js';


const router = express.Router();

router.get('/articulo',getArticulo)
router.post('/articulo',createPost)
router.put('/articulo/:id',putPost)
router.delete('/articulo/:id',deletePost)


router.post('/auth/register', registerUser);
router.get('/usuarios', obtenerUsuarios);


router.post('/auth/login', loginUser);


router.get('/articulos-con-oferta', obtenerArticulosConOferta);

router.post('/carrito', crearNuevoCarrito)
router.post('/articulo-carrito-usuario', agregarArticuloAlCarrito);

export default router