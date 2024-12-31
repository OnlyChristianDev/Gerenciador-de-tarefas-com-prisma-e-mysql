const express = require('express');
const TarefaController = require("../controller/tarefasController"); 
const router = express.Router();

router.post('/tarefas', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas)
router.delete('/tarefas/:id', TarefaController.removerTarefa)

module.exports = router;
