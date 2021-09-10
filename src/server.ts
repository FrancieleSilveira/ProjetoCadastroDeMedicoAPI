console.clear(); // limpa o console

import express from "express"; // importa express da biblioteca express
import cors from "cors";
import { mongoose } from "./config/database"; // importa mongoose do arquivo informado
import { router } from "./config/routes";

const app = express(); // cria a aplicação apartir do express e atribui a constante app
const db = mongoose; // atribui o mongoose a constante db

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {   // roda a aplicação na porta definida, no caso 3000
    console.log("O servidor está rodando...");
});