"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkins = exports.getMaps = exports.getWeapons = exports.getAgents = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = 'https://valorant-api.com/v1';
// Função para obter dados dos agentes
const getAgents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}/agents`);
        const agents = response.data.data;
        res.render('index', { title: 'Agentes', items: agents });
    }
    catch (error) {
        res.status(500).send('Erro ao buscar agentes.');
    }
});
exports.getAgents = getAgents;
// Função para obter dados das armas
const getWeapons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}/weapons`);
        const weapons = response.data.data;
        res.render('index', { title: 'Armas', items: weapons });
    }
    catch (error) {
        res.status(500).send('Erro ao buscar armas.');
    }
});
exports.getWeapons = getWeapons;
// Função para obter dados dos mapas
const getMaps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}/maps`);
        const maps = response.data.data;
        res.render('index', { title: 'Mapas', items: maps });
    }
    catch (error) {
        res.status(500).send('Erro ao buscar mapas.');
    }
});
exports.getMaps = getMaps;
// Função para obter dados das skins
const getSkins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${BASE_URL}/skins`);
        const skins = response.data.data;
        res.render('index', { title: 'Skins', items: skins });
    }
    catch (error) {
        res.status(500).send('Erro ao buscar skins.');
    }
});
exports.getSkins = getSkins;
