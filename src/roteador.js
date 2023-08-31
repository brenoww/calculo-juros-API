const express = require("express");
const { jurosSimples } = require("./controladores/controlador");

const rotas = express();

rotas.get("/juros/simples", jurosSimples);


module.exports = rotas