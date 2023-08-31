const express = require("express");
const { jurosSimples, jurosComposto, verHistorico } = require("./controladores/controlador");
const verificarDados = require("./intermediarios");

const rotas = express();

rotas.get("/juros/historico", verHistorico);
rotas.post("/juros/simples", verificarDados, jurosSimples);
rotas.post("/juros/composto", verificarDados, jurosComposto);


module.exports = rotas