import React, { useState } from "react";
import productsData from "../jsons/Livros.json";
import EditorasData from "../jsons/Editoras.json";
import "./Lista_Livros.css";

interface EditorasArray {
  nomeEdit: string;
  codEditora: number;
}

interface Product {
  id: number;
  title: string;
  resumo: string;
  author: string;
  publisher: number;
  Categoria: string;
}

const Lista_Livros = () => {
  const products: Product[] = productsData;
  const editoras: EditorasArray[] = EditorasData;

  // Estado para controlar a visibilidade das linhas
  const [linhasVisiveis, setLinhasVisiveis] = useState<boolean[]>(products.map(() => true));

  // Função para inibir a renderização da linha correspondente ao ser acionado o botão
  const inibirRenderizacao = (index: number) => {
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
              <div className="cell">{product.id}</div><div className="cell">
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

export default Lista_Livros;