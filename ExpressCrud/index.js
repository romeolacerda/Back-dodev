const express = require("express");
const app = express();

app.use(express.json());

//buscar todos os usuários (GET)
app.get("/usuarios", (req, res) => {
  console.log("Api get todos");
  res.status(200).send(req.params);
});
// buscar um usuário específico através do ID (GET by ID)
app.get("/usuarios/:id", (req, res) => {
  console.log("Api get usuario por id");
  res.status(200).send(req.params.id);
});
// cadastrar um novo usuário (POST)
app.post("/usuarios", (req, res) => {
  console.log("API post do usuario");
  res.status(200).send(req.body);
});
// atualizar os dados de um usuário através do ID (PUT)
app.put("/usuarios/:id", (req, res) => {
  console.log("Api put usuario");
  res.status(200).send(req.params.id);
});
// deletar um usuário através do ID (DELETE)
app.delete("/usuarios/:id", (req, res) => {
  console.log("Api delete usuario");
  res.status(200).send(req.params.id);
});
//servidor
app.listen(4000, () => {
  console.log("servidor na porta 4000");
});
