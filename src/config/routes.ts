import { Router } from "express";
import { MedicoController } from "../controllers/MedicoController";

const router = Router();
const medicoController = new MedicoController();

router.post("/medico/cadastrar", medicoController.cadastrar); // usar post para formulários
router.get("/medico/buscar/:crm", medicoController.buscarPorCrm);
router.get("/medico/listar", medicoController.listar);
router.put("/medico/alterar", medicoController.alterar);
router.delete("/medico/remover/:crm", medicoController.deletar);

export { router };