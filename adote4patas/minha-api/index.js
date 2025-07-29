// /index.js (na raiz do projeto)

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Caminhos atualizados para apontar para dentro da pasta 'src'
const animalRoutes = require('./src/routes/animal.routes.js');
const usuarioRoutes = require('./src/routes/usuario.routes.js');

// Middlewares
app.use(cors());
app.use(express.json());

// Middleware para servir arquivos estáticos de dentro da pasta 'src/uploads'
app.use('/uploads', express.static('./src/uploads'));

// Rota principal da API
app.get('/api', (req, res) => {
    res.send('API para Adoção de Cães está funcionando!');
});

// Registra as rotas de animais sob o prefixo /api/animais
app.use('/api/animais', animalRoutes);
// Registra as rotas de usuarios sob o prefixo /api/usuarios
app.use('/api/usuarios', usuarioRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});