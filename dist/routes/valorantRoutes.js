"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const valorantController_1 = require("../controllers/valorantController");
const router = express_1.default.Router();
// Rota para obter agentes
router.get('/agents', valorantController_1.getAgents);
// Rota para obter armas
router.get('/weapons', valorantController_1.getWeapons);
// Rota para obter mapas
router.get('/maps', valorantController_1.getMaps);
// Rota para obter skins
router.get('/skins', valorantController_1.getSkins);
exports.default = router;
