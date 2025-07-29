const usuarioService = require('../services/usuario.service');

class UsuarioController {
  async getAll(req, res) {
    try {
      const usuarios = await usuarioService.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários.' });
    }
  }

  async create(req, res) {
    try {
      const { nome, email } = req.body;
      if (!nome || !email || !req.file) {
        return res.status(400).json({ message: 'Nome, email e avatar são obrigatórios.' });
      }

      const dados = { nome, email, avatarUrl: `/uploads/${req.file.filename}` };
      const novoUsuario = await usuarioService.create(dados);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário.' });
    }
  }
}

module.exports = new UsuarioController();