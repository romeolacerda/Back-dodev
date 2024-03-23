const express = require("express");
const app = express();

app.use(express.json());

const carros = [];

app.listen(5000, () => {
  console.log("iniciei meu servidor");
});

// buscar todos os veículos disponíveis (GET)
app.get("/carros", (req, res) => {
  res.status(200).send({ carros: carros });
});
// buscar um veículo específico através do ID (GET by ID)
app.get("/carros/:id", (req, res) => {
  const carroId = req.params.id;
  res.status(200).send(carros.find((x) => x.id == carroId));
});
// cadastrar um novo veículo na loja (POST)
app.post("/carros", (req, res) => {
  carros.push(req.body);
  res.status(200).send("carros cadastrados");
});
// atualizar os dados de um veículo através do ID (PUT)
app.put("/carros/:id", (req, res) => {
  const carro = carros.find((x) => x.id === req.params.id);
  const idCarro = carros.indexOf(carro);
  carros[idCarro] = req.body;
  res.status(200).send("carro atualizado com sucesso");
});
// excluir um veículo vendido através do ID (DELETE)
app.delete("/carros/:id", (req, res) => {
  const carro = carros.find((x) => x.id === req.params.id);
  const idCarro = carros.indexOf(carro);
  carros.splice(idCarro, 1);
  res.status(200).send("carro excluido com sucesso");
});
