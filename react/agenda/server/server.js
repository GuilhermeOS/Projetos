import express from "express";
import db from "./app/config/database.js";
import contatoRoutes from "./app/routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/contatos', contatoRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));