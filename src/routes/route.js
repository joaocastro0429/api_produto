const { Router } = require("express");
const Produto = require("../models/Produtos");

const ProutosController=require('../controllers/ProdutosController')

const produtoController=new ProutosController()

const routes = Router();

routes.get("/produtos",produtoController.listar)

routes.post("/produtos",produtoController.criar)

routes.get("/produtos/:id",produtoController.listarIndex)

routes.put("/produtos/:id",produtoController.atualizar)

routes.delete("/produtos/:id", produtoController.excluir)

module.exports = routes;
