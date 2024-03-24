const express = require("express");
const app = express();

app.use(express.json());

const alunos = [];

// buscar todos os alunos (GET)
app.get("/alunos", (req, res) => {
  res.status(200).send({ alunos: alunos });
});
// buscar um aluno específico através do ID (GET by ID)
app.get("/alunos/:id", (req, res) => {
  const alunoId = req.params.id;
  res.status(200).send(alunos.find((x) => x.id == alunoId));
});
// cadastrar um novo aluno (POST)
app.post("/alunos", (req, res) => {
  alunos.push(req.body);
  res.status(200).send("alunos cadastrados");
});
// atualizar os dados de um aluno através do ID (PUT)
app.put("/alunos/:id", (req, res) => {
  const aluno = alunos.find((x) => x.id === req.params.id);
  const idAluno = alunos.indexOf(aluno);
  alunos[idAluno] = req.body;
  res.status(200).send("aluno atualizado com sucesso");
});

// deletar um aluno através do ID (DELETE)
app.delete("/alunos/:id", (req, res) => {
  const aluno = alunos.find((x) => x.id === req.params.id);
  const idAluno = alunos.indexOf(aluno);
  alunos.splice(idAluno, 1);
  res.status(200).send("aluno excluido com sucesso");
});

/////
app.listen(5000, () => {
  console.log("iniciei meu servidor");
});
