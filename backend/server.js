// backend\server.js

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/articulos.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
