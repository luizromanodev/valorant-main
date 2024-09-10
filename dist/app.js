"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const valorantRoutes_1 = __importDefault(require("./routes/valorantRoutes"));
const app = (0, express_1.default)();
const port = 3000;
// Configurando EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// Usando as rotas de Valorant
app.use('/valorant', valorantRoutes_1.default);
// Página inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à API Valorant!');
});
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
