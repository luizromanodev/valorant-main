import express from 'express';
import { getAgents, getWeapons, getMaps, getSkins, showHomePage } from '../controllers/valorantController';

const router = express.Router();

// Rota da página inicial
router.get('/', showHomePage);

// Rota para obter agentes
router.get('/agents', getAgents);

// Rota para obter armas
router.get('/weapons', getWeapons);

// Rota para obter mapas
router.get('/maps', getMaps);

// Rota para obter skins
router.get('/skins', getSkins);


export default router;