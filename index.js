const express = require('express');
const tarefaRouter = require('./routes/tarefaRouter'); 

const app = express();

app.use(express.json());
app.use('/api', tarefaRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
