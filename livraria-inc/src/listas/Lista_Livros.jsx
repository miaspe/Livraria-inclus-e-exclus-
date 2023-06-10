import React, { useState, useEffect } from "react";
import "./Lista_Livros.css";
import * as mongoose from "mongoose";

const url = 'mongodb://localhost:27017'; // URL de conexão do MongoDB
const dbName = 'Lojaweb'; // Nome do banco de dados que você deseja conectar

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão com o MongoDB estabelecida.');
}).catch((error) => {
  console.log('Erro ao conectar ao MongoDB:', error);
});

const EditoraSchema = new mongoose.Schema({
  nomeEdit: String,
  codEditora: Number
});

const ProductSchema = new mongoose.Schema({
  id: Number,
  title: String,
  resumo: String,
  author: String,
  publisher: Number,
  Categoria: String
});

const EditoraModel = mongoose.model('Editora', EditoraSchema);
const ProductModel = mongoose.model('Product', ProductSchema);

const ListaLivros = () => {
  const [products, setProducts] = useState([]);
  const [editoras, setEditoras] = useState([]);

  // Estado para controlar a visibilidade das linhas
  const [linhasVisiveis, setLinhasVisiveis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await ProductModel.find().exec();
      const editorasData = await EditoraModel.find().exec();

      setProducts(productsData);
      setEditoras(editorasData);
      setLinhasVisiveis(productsData.map(() => true));
    };

    fetchData();
  }, []);

  // Função para inibir a renderização da linha correspondente ao ser acionado o botão
  const inibirRenderizacao = (index) => {
    setLinhasVisiveis((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div>
      <h2>Lista de Livros Disponíveis</h2>
      <div className="table">
        <div className="row header">
          <div className="cell">Num id</div>
          <div className="cell">Excluir linha</div>
          <div className="cell">Título</div>
          <div className="cell">Resumo</div>
          <div className="cell">Autor</div>
          <div className="cell">Editora</div>
          <div className="cell">Categoria</div>
        </div>

        {products.map((product, index) => {
          const editora = editoras.find((e) => e.codEditora === product.publisher);
          const nomeEditora = editora ? editora.nomeEdit : '';

          // Verificar se a linha deve ser renderizada com base no estado linhasVisiveis
          if (!linhasVisiveis[index]) {
            return null; // Retorna nulo para inibir a renderização da linha
          }

          return (
            <div key={product.id} className="row">
              <div className="cell">{product.id}</div>
              <div className="cell">
                <button onClick={() => inibirRenderizacao(index)}>|</button>
              </div>
              <div className="cell">{product.title}</div>
              <div className="cell">{product.resumo}</div>
              <div className="cell">{product.author}</div>
              <div className="cell">{nomeEditora}</div>
              <div className="cell">{product.Categoria}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListaLivros;