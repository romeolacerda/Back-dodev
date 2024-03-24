const express = require("express");
const app = express();

app.use(express.json());

const users = [];

//responsavel por pegar todos os alunos
app.get("/alunos", (req, res) => {
  console.log(req.query);
  console.log("entrou no alunos");
  res.status(200).send({ users: users });
});

//responsavel por pegar um aluno
app.get("/alunos/:id", (req, res) => {
  const alunoId = req.params.id;
  console.log("entrou no alunos");
  res.status(200).send(users.find((x) => x.id == alunoId));
});

app.post("/alunos", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  console.log("entrou no alunos");
  res.status(200).send("deu certo");
});

app.listen(3000, () => {
  console.log("iniciei meu servidor");
});
