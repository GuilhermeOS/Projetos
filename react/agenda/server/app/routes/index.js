import express from "express";
 
import { 
    getAllContatos,
    createContato,
    getContatoById,
    updateContato,
    deleteContato
} from "../controllers/Contatos.js";
 
const router = express.Router();
 
router.get('/', getAllContatos);
router.get('/:id', getContatoById);
router.post('/', createContato);
router.patch('/:id', updateContato);
router.delete('/:id', deleteContato);
 
export default router;