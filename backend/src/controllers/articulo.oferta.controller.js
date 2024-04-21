import { createGetModelArticuloOferta } from '../models/articulos.oferta.js';

const obtenerArticulosConOferta = async (req, res) => {
  try {
    const articulosConOferta = await createGetModelArticuloOferta();
    res.status(200).json(articulosConOferta);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los artículos con oferta: ' + error.message });
  }
};

export { obtenerArticulosConOferta };
