import { model, Schema } from "mongoose";


const medicoSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME é obrigatório!"],
        },
        crm: {
            type: String,
            required: [true, "O campo CRM é obrigatório!"],
        },
        especialidade: {
            type: String,
            required: [true, "O campo ESPECIALIDADE é obrigatório!"],
        },
    },
    {
        timestamps: true,
    }
);

export default model ("medicos", medicoSchema);