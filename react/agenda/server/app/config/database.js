import { Sequelize } from "sequelize"

const db = new Sequelize(
    'db_agenda_contatos', 'root', '1234', {
        host: "localhost",
        dialect: "mysql"
    }
);

export default db;