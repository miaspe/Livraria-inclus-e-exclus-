import React, { useState } from 'react';
import './App.css';
import './listas/Lista_Livros.css';
import ListaLivros from './listas/Lista_Livros';
//import {id} from './listas/Lista_Livros';
import ListaEditoras from './listas/Lista_Editoras';



function App() {
  const [showListaLivros, setShowListaLivros] = useState(false);
  const [showListaEditoras, setShowListaEditoras] = useState(false);


  const handleBotao1Click = () => {
    setShowListaLivros(!showListaLivros);
    setShowListaEditoras(false); // oculta lista Editoras ao exibir a lista livros
  };

  const handleBotao2Click = () => {
    setShowListaLivros(false); // oculta a lista livros ao exibir a lista editoras
    setShowListaEditoras(!showListaEditoras);    
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <p>    Livraria Mi      </p> 
              
      </header>
      <div className="side-panel">
        <div className="buttons">
          <button onClick={handleBotao1Click}>Lista Livros</button>
          <button onClick={handleBotao2Click}>Lista Editoras</button>
          <div className="table">
            {showListaLivros && <ListaLivros />}
            {showListaEditoras && <ListaEditoras />}
          </div>
        </div>
      </div>
      <body className="App-body">
        <h1>Conteudo aqui</h1>                
      </body>
      <footer >
        <p>© 2023 Livraria. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;