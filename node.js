const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send({ error: 'Numbers are required' });
  }

  const sum = numbers.split(',').reduce((a, b) => a + +b, 0);
  res.send({ sum });
});

app.get('/product', (req, res) => {
  const numbers = req.query.numbers;

  const separate = numbers.split(',').map(num => +num);

  const product = separate.reduce((a, b) => a * b, 1);
  res.send({ product });
});

app.listen(3000, () => {
  console.log('API listening at http://localhost:3000');
});

