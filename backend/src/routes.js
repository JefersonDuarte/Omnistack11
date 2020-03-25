const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {

  let body = req.body;

  console.log(body);
  
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Jeferson Duarte'
  })
})


module.exports = routes;