const fs = require('fs').promises;
const path = require('path');

const dbPath = path.resolve(__dirname, '../database/animais.json');

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

class CachorroService {
  async getAll() {
    return await lerDados();
  }

  async create(dadosCachorro) {
    const animais = await lerDados();
    const ultimoId = animais.length > 0 ? Math.max(...animais.map(c => c.id)) : 0;
    const novoCachorro = { id: ultimoId + 1, ...dadosCachorro };
    animais.push(novoCachorro);
    await escreverDados(animais);
    return novoCachorro;
  }
}

module.exports = new CachorroService();