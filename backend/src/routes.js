const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

routes.post('/ongs', (req, res) => {

  const {name, mail, whatsapp, city, uf} = req.body;

  const id = crypto.randomBytes(4).toString('HEX')
  
  return res.json()
})


module.exports = routes;