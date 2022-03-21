import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const Contato = db.define('contatos', {
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

export default Contato;