const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const criarTarefa = async (req, res) => {
    try{
        const {nome, descricao} = req.body

        if (!nome || !descricao) {
            return res.status(400).json({ error: "Nome e descrição são obrigatórios" });
        }

        const newTarefa = await prisma.tarefas.create({
            data: {
                name : nome,
                description: descricao
            },
        });
        res.status(200).json({newTarefa})
    } catch(error){
        console.log(error)
        res.status(500).json({ error: "Erro inesperado error errorkeoprfjipsjgw"  })
    }
}

const listarTarefas = async (req, res) => {
    try {
        const TodasTarefas = await prisma.tarefas.findMany()
        res.status(200).json({ TodasTarefas })
    } catch (error){
        res.status(500).json({ error: "Erro ao encontrar as tarefas", error })
    }
    
}


const removerTarefa = async (req, res) => {
    try {
        const { id } = req.params

        if (!id){
            res.status(400).json({ msg: "o ID é obrigatório para a remoção das tarefas" })
        } 

        const tarefaRemovida = await prisma.tarefas.delete({
            where: { id: parseInt(id) },
        })
        res.status(200).json({ msg: "tarefa removida com sucesso", tarefaRemovida })
    } catch (error){
        res.status(500).json({ error: "Erro ao remover a tarefa", error })
    }
    
}


module.exports = { criarTarefa, listarTarefas, removerTarefa };