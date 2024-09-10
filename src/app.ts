import express from 'express';
import path from 'path';
import valorantRoutes from './routes/valorantRoutes';

const app = express();
const port = 3000;

// Configurando EJS como o motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servindo arquivos estáticos como CSS gerado por Tailwind
app.use(express.static(path.join(__dirname, '../public')));

// Usando as rotas de Valorant
app.use('/valorant', valorantRoutes);

// Página inicial redirecionando para /valorant
app.get('/', (req, res) => {
  res.redirect('/valorant');
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
