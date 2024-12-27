const express = require('express');
const TarefaController = require("../controller/tarefasController"); 
const router = express.Router();

router.post('/tarefas', TarefaController.criarTarefa);

module.exports = router;
