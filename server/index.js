const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurações
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Dados em memória (substitua com banco de dados em produção)
let items = [];

// Rotas
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name, price } = req.body;
  const newItem = { name, price };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const item = items.find((item) => item.id === id);

  if (!item) {
    res.status(404).json({ message: 'Item not found' });
  } else {
    item.name = name;
    item.price = price;
    res.json(item);
  }
});

app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  items = items.filter((item) => item.id !== id);
  res.sendStatus(204);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
