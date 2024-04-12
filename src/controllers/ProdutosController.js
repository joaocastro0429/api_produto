
const Produto=require('../models/Produtos')

class ProutosController{
 async listar (request, response){
        try {
          const produtos = await Produto.findAll({});
          return response.json(produtos);
        } catch (error) {
          return response.status(500).json({ error: "produto não encotrado " });
        }
      }

      async criar(request, response)  {
        try {
          const { nome, preco } = request.body;
          await Produto.create({ nome, preco });
          return response.status(201).json();
        } catch (error) {
          return response.status(500).json({ error: "produto não encontrado " });
        }
      }
      async listarIndex (request, response){
        try {
          const produtoId = request.params.id;
          const produto = await Produto.findByPk(produtoId);
          if (!produto) {
            return response.status(404).json({ erro: "Produto não encontrado" });
          }
          return response.json(produto);
        } catch (error) {
          return response.status(500).json({ error: "correu algum erro " });
        }
      }

      async atualizar(request, response) {
        try {
          const produtoId = request.params.id;
          const { nome, preco } = request.body;
      
         
          const produto = await Produto.findOne({ where: { id: produtoId } });
          if (!produto) {
            return response.status(404).json({ erro: "Produto não encontrado" });
          }
      
       
          await Produto.update({ nome, preco }, { where: { id: produtoId } });
      
          return response
            .status(200)
            .json({ message: "Produto atualizado com sucesso" });
        } catch (error) {
          return response.status(500).json({ error: "Ocorreu algum erro" });
        }
      }

      async excluir(request, response) {
        const produtoId = request.params.id;
      
        try {
          const produto = await Produto.findByPk(produtoId);
          if (!produto) {
            return response.status(404).json({ erro: "Produto não encontrado" });
          }
      
          // Marca o registro como excluído
          await produto.update({ deleted: true });
      
          return response.json({ msg: "Produto marcado como excluído!" });
        } catch (error) {
          return response.status(500).json({ error: "Erro ao excluir produto" });
        }
      }
      
}

module.exports=ProutosController
