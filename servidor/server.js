const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { nome, email } = req.body;
  const data = { nome, email };

  fs.readFile('data.json', 'utf8', (err, jsonData) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao ler o arquivo.');
    }

    const existingData = jsonData ? JSON.parse(jsonData) : [];
    existingData.push(data);

    fs.writeFile('data.json', JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erro ao salvar os dados.');
      }

      res.status(200).send('Dados salvos com sucesso!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});