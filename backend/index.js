const express = require('express');

const app = express();

app.use(express.json())

app.post('/users', (req, res) => {

  let body = req.body;

  console.log(body);
  

  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Jeferson Duarte'
  })
})

app.listen(3333);