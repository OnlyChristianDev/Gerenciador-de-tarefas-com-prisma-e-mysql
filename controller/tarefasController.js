const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const criarTarefa = async (req, res) => {
    try{
        console.log("corpo", req.body)
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

module.exports = { criarTarefa };