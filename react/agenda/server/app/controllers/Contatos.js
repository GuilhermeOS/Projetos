import Contato from "../models/contatosModel.js"

export const getAllContatos = async (req, res) => {
    try {
        const contatos = await Contato.findAll();
        res.json(contatos);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getContatoById = async (req, res) => {
    try {
        const contato = await Contato.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(contato[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createContato = async (req, res) => {
    try {
        await Contato.create(req.body);
        res.json({
            "message": "Contato Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateContato = async (req, res) => {
    try {
        await Contato.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contato Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteContato = async (req, res) => {
    try {
        await Contato.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Contato Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}