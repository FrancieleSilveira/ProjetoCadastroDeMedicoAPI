import { Request, Response } from "express";
import MedicoSchema from "../models/MedicoSchema";

class MedicoController{
    async listar(request: Request, response: Response) {
        response.status(200).json(await MedicoSchema.find({}));
    }

    async buscarPorCrm(request: Request, response: Response) {
        const { crm } = request.params; // .params pega o parametro da url
        response.status(200).json(await MedicoSchema.find({ crm }));
    }

    async cadastrar(request: Request, response: Response) {
        try {
            const { crm } = request.body;
            if(await MedicoSchema.exists({ crm })){ // await para esperar a verificação
                response.status(409).json({ msg: "Esse médico já está cadastrado!" }); // 409 = cód. conflito
            }else {
                const medico = request.body; // o corpo da requisição envia o objeto para a constante pessoa
                const novoMedico = await MedicoSchema.create(medico);
                response.status(201).json(novoMedico);
            }
        } catch (error) {
            response.status(400).json({
                objeto: error,
                msg: "Falha na validação",
                erro: true
            })
        }
    }

    async alterar(request: Request, response: Response) {
        const { crm } = request.body; // .body pega o pametro(cpf) do corpo
        response.status(200).json(await MedicoSchema.findOneAndUpdate({ crm }, request.body));
    }

    async deletar(request: Request, response: Response) {
        const { crm } = request.params; // .params pega o parametro(cpf) da url
        response.status(200).json(await MedicoSchema.findOneAndDelete({ crm }));
    }
}

export { MedicoController }