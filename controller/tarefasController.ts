import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const criarTarefa = async (req, res) => {
    try{
        const {nome, descricao} = req.body
        const newTarefa = await prisma.tarefas.create({
            data: {
                name : nome,
             description: descricao
            },
        });
        res.status(200).json({newTarefa})
    } catch(error){
        res.status(500).json({ error: "Erro inesperado"})
    }
}