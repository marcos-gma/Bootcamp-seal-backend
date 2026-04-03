const express = require("express");
const app = express();
app.use(express.json());

let filmes = [
  { id: 1, titulo: "Cidade de Deus", diretor: "Fernando Meirelles", ano: 2002, genero: "Drama" },
  { id: 2, titulo: "Tropa de Elite", diretor: "José Padilha", ano: 2007, genero: "Ação" },
  { id: 3, titulo: "Central do Brasil", diretor: "Walter Salles", ano: 1998, genero: "Drama" },
  { id: 4, titulo: "O Agente Secreto", diretor: "Kleber Mendonça Filho", ano: 2025, genero: "Suspense"}
];
let proximoId = 5;

// GET /filmes — lista todos
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

// GET /filmes/:id — busca por id
app.get("/filmes/:id", (req, res) => {
  const filme = filmes.find((f) => f.id === Number(req.params.id));
  if (!filme) return res.status(404).json({ erro: "Filme não encontrado" });
  res.json(filme);
});

// POST /filmes — cria novo
app.post("/filmes", (req, res) => {
  const { titulo, diretor, ano, genero } = req.body;
  if (!titulo || !diretor || !ano || !genero) {
    return res.status(400).json({ erro: "titulo, diretor, ano e genero são obrigatórios" });
  }
  const novoFilme = { id: proximoId++, titulo, diretor, ano, genero };
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

// PUT /filmes/:id — atualiza
app.put("/filmes/:id", (req, res) => {
  const index = filmes.findIndex((f) => f.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ erro: "Filme não encontrado" });

  const { titulo, diretor, ano, genero } = req.body;
  filmes[index] = { ...filmes[index], titulo, diretor, ano, genero };
  res.json(filmes[index]);
});

// DELETE /filmes/:id — remove
app.delete("/filmes/:id", (req, res) => {
  const index = filmes.findIndex((f) => f.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ erro: "Filme não encontrado" });

  filmes.splice(index, 1);
  res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
