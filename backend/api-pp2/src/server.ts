import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from"./middlewares/errorHandler";

const app = express(); // app representar servidor http
app.use(cors()); // servidor vai usar o cors 
app.use(express.json()); // servidr vai receber um JSON de body 

//cria primeira rota da API, que vai responder a requisição
app.get("/", (req, res) => {
  res.json({ status: "API no ar" });
});

app.use(errorHandler); // middleware de tratamento de erros
app.listen(3000); // servidor vai executar na porta 3000 
