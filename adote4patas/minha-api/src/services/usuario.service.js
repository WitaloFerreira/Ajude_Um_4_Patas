const fs = require('fs').promises;
const path = require('path');

const dbPath = path.resolve(__dirname, '../database/usuarios.json');

async function lerDados() {
  try {
    const dados = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(dados);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function escreverDados(dados) {
  await fs.writeFile(dbPath, JSON.stringify(dados, null, 2));
}

class UsuarioService {
  async getAll() {
    return await lerDados();
  }

  async create(dadosUsuario) {
    const usuarios = await lerDados();
    const ultimoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) : 0;
    const novoUsuario = { id: ultimoId + 1, ...dadosUsuario };
    usuarios.push(novoUsuario);
    await escreverDados(usuarios);
    return novoUsuario;
  }
}

module.exports = new UsuarioService();