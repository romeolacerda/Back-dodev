const db = require("./dbFunctions");
const dbcontext = db.AlunosDatabase();
const express = require("express");
const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("iniciei meu servidor");
});
/////

// buscar todos os alunos (GET)
app.get("/alunos", async (req, res) => {
  res.status(200).send(await dbcontext.list());
});
// buscar um aluno específico através do ID (GET by ID)
app.get("/alunos/:id", async (req, res) => {
  const alunoId = req.params.id;
  res.status(200).send(await dbcontext.get(alunoId));
});
// cadastrar um novo aluno (POST)
app.post("/alunos", async (req, res) => {
  res.status(200).send(await dbcontext.insert(req.body));
});
// atualizar os dados de um aluno através do ID (PUT)
app.put("/alunos/:id", async (req, res) => {
  res.status(200).send(await dbcontext.update(req.body, req.params.id));
});

// deletar um aluno através do ID (DELETE)
app.delete("/alunos/:id", async (req, res) => {
  await dbcontext.del(req.params.id);
  res.status(200).send("aluno excluido com sucesso");
});
