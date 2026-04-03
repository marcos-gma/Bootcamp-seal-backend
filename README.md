# Catálogo de Filmes Brasileiros — API

API REST simples para gerenciar um catálogo de filmes brasileiros, desenvolvida com **Node.js + Express**. Os dados são armazenados em memória (sem banco de dados).

## Tecnologias

- Node.js
- Express

## Como rodar

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Rotas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/filmes` | Lista todos os filmes |
| GET | `/filmes/:id` | Busca um filme pelo ID |
| POST | `/filmes` | Cadastra um novo filme |
| PUT | `/filmes/:id` | Atualiza um filme existente |
| DELETE | `/filmes/:id` | Remove um filme |

## Exemplos de uso

### Listar todos os filmes
```http
GET /filmes
```

### Buscar por ID
```http
GET /filmes/1
```

### Cadastrar novo filme
```http
POST /filmes
Content-Type: application/json

{
  "titulo": "Bacurau",
  "diretor": "Kleber Mendonça Filho",
  "ano": 2019,
  "genero": "Suspense"
}
```

### Atualizar filme
```http
PUT /filmes/1
Content-Type: application/json

{
  "titulo": "Cidade de Deus",
  "diretor": "Fernando Meirelles",
  "ano": 2002,
  "genero": "Crime"
}
```

### Deletar filme
```http
DELETE /filmes/1
```

## Observação

Os dados são armazenados em memória. Ao reiniciar o servidor, os dados voltam ao estado inicial.
