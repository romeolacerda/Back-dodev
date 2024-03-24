const http = require("http");

const server = http.createServer((req, res) => {
  console.log("chegou na api");
  console.log(req.method);
  console.log(req.url);

  if (req.method === "GET" && req.url.startsWith("/user")) {
    res.writeHead(200);
    res.end("todos os usuarios");
    console.log("Req get recebida");
    return;
  }

  if (req.method === "POST" && req.url.startsWith("/user")) {
    let bodyRaw = "";
    req.on("data", (data) => (bodyRaw += data));
    let bodyJson = JSON.parse(bodyRaw);
    request.once("end", () => {
      //do the action
    });
    return;
  }

  res.writeHead(404);
  res.end("Recurso não encontrado");
});

server.listen(3000, () => {
  console.log("servidor na porta 3000");
});
