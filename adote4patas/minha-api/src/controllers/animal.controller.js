const animalService = require('../services/animal.service');

class CachorroController {
  async getAll(req, res) {
    try {
      const animais = await animalService.getAll();
      res.json(animais);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar cães.' });
    }
  }

  async create(req, res) {
    try {
      const { nome, raca, idade } = req.body;
      if (!nome || !raca || !idade || !req.file) {
        return res.status(400).json({ message: 'Todos os campos (nome, raça, idade, foto) são obrigatórios.' });
      }

      const dados = { nome, raca, idade: parseInt(idade), fotoUrl: `/uploads/${req.file.filename}` };
      const novoCachorro = await animalService.create(dados);
      res.status(201).json(novoCachorro);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao cadastrar cão.' });
    }
  }
}

module.exports = new CachorroController();