// backend/src/controllers/auth.controller.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../../db/conectionDB.js';
 // Asegúrate de que la ruta es correcta

export const registerUser = async (req, res) => {
    const { nombre, correo_electronico, contraseña, direccion, telefono, rol_id } = req.body;
    const hashedPassword = bcrypt.hashSync(contraseña, 10);
    
    try {
      await pool.query('INSERT INTO usuario (nombre, correo_electronico, contrasena, direccion, telefono, rol_id) VALUES ($1, $2, $3, $4, $5, $6)', 
        [nombre, correo_electronico, hashedPassword, direccion, telefono, rol_id]);
      res.status(201).send('Usuario registrado con éxito.');
    } catch (error) {
      res.status(500).send('Error al registrar el usuario.');
    }
};

export const loginUser = async (req, res) => {
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

        res.status(200).send({ auth: true, token });
    } catch (error) {
        return res.status(500).send('Error en el servidor.');
    }
};
