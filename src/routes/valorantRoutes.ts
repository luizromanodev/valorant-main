import express from 'express';
import { getAgents, getWeapons, getMaps, getSkins, showHomePage } from '../controllers/valorantController';

const router = express.Router();

router.get('/', showHomePage);

router.get('/agents', getAgents);

router.get('/weapons', getWeapons);

router.get('/maps', getMaps);

router.get('/skins', getSkins);


export default router;