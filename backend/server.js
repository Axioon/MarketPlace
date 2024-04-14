import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/articulos.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/v1',router)

// Reemplacé la importación de "router" con un comentario para indicar que falta la definición

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
