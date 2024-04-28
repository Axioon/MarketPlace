//backend\db\conectionDB.js

import 'dotenv/config';
import pg from 'pg';

const pool = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT, // Agregué esta línea para especificar el puerto de la base de datos
    allowExitOnIdle: true,
});


// Para verificar si la base de datos está conectada
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Base de datos conectada:', res.rows[0].now);
    }
});

export default pool;