// backend/src/controllers/auth.controller.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import pool from '../../db/conectionDB.js';

// Validación y registro de usuario
export const registerUser = [
    body('correo_electronico').isEmail().withMessage('Proporcione un correo electrónico válido.'),
    body('contrasena').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
    body('nombre').notEmpty().withMessage('El nombre es obligatorio.'),
    body('direccion').notEmpty().withMessage('La dirección es obligatoria.'),
    body('telefono').notEmpty().withMessage('El teléfono es obligatorio.'),
    body('rol_id').notEmpty().withMessage('El rol es obligatorio.'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { nombre, correo_electronico, contrasena, direccion, telefono, rol_id } = req.body;
        const hashedPassword = bcrypt.hashSync(contrasena, 10);

        try {
            await pool.query(
                'INSERT INTO usuario (nombre, correo_electronico, contrasena, direccion, telefono, rol_id) VALUES ($1, $2, $3, $4, $5, $6)',
                [nombre, correo_electronico, hashedPassword, direccion, telefono, rol_id]
            );
            res.status(201).send('Usuario registrado con éxito.');
        } catch (error) {
            if (error.code === '23505') {
                res.status(409).send("El correo electrónico ya está registrado.");
            } else {
                res.status(500).send('Error al registrar el usuario: ' + error.message);
            }
        }
    }
];

// Inicio de sesión de usuario
export const loginUser = [
    body('correo_electronico').isEmail().withMessage('Por favor, introduzca un correo electrónico válido.'),
    body('contrasena').notEmpty().withMessage('La contraseña es obligatoria.'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { correo_electronico, contrasena } = req.body;

        try {
            const user = await pool.query('SELECT * FROM usuario WHERE correo_electronico = $1', [correo_electronico]);
            if (user.rows.length === 0) {
                return res.status(404).send('Usuario no encontrado.');
            }

            const passwordIsValid = bcrypt.compareSync(contrasena, user.rows[0].contrasena);
            if (!passwordIsValid) {
                return res.status(401).send('Contraseña incorrecta.');
            }

            const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
                expiresIn: 86400 // expira en 24 horas
            });

            res.status(200).send({
                auth: true,
                token,
                user: {
                    nombre: user.rows[0].nombre,
                    rol_id: user.rows[0].rol_id
                }
            });
        } catch (error) {
            res.status(500).send('Error en el servidor al iniciar sesión: ' + error.message);
        }
    }
];
