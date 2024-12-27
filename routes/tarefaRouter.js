const express = require('express');
const TarefaController = require("../controller/tarefasController"); 
const router = express.Router();

router.get('/tarefas', TarefaController.listarTarefas);
router.post('/tarefas', TarefaController.criarTarefa);

module.exports = router;
