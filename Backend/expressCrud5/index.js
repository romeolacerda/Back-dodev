const db = require("./dbFunctions");
const dbCars = db.veiculosDatabase();

const express = require("express");
const app = express();

app.use(express.json());

const carros = [];

app.listen(5000, () => {
  console.log("iniciei meu servidor");
});

// buscar todos os veículos disponíveis (GET)
app.get("/carros", async (req, res) => {
  res.status(200).send(await dbCars.list());
});
// buscar um veículo específico através do ID (GET by ID)
app.get("/carros/:id", async (req, res) => {
  res.status(200).send(await dbCars.get(req.params.id));
});
// cadastrar um novo veículo na loja (POST)
app.post("/carros", async (req, res) => {
  res.status(200).send(await dbCars.insert(req.body, req.params.id));
});
// atualizar os dados de um veículo através do ID (PUT)
app.put("/carros/:id", async (req, res) => {
  res.status(200).send(await dbCars.update(req.body, req.params.id));
});
// excluir um veículo vendido através do ID (DELETE)
app.delete("/carros/:id", async (req, res) => {
  await dbCars.update(req.params.id);
  res.status(200).send("carro excluido com sucesso");
});
