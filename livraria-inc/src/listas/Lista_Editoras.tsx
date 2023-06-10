import EditorasData from "../jsons/Editoras.json";
import "./Lista_Livros.css";


interface EditorasArray {
  codEditora: number;
  nomeEdit: string;
  endereco: string;
  cep: string;
}  

const ListaEditoras = () => {
  const editoras: EditorasArray[] = EditorasData;
  return (
    <div>
      <h2>Lista de Editoras</h2>
      <div className="table">
        <div className="row header">
          <div className="cell">Cod edit</div>
          <div className="cell">Nome</div>
          <div className="cell">Endereço</div>
          <div className="cell">CEP</div>
        </div>

        {editoras.map((product) => {
          return (
            <div key={product.codEditora} className="row">
              <div className="cell">{product.codEditora}</div>
              <div className="cell">{product.nomeEdit}</div>
              <div className="cell">{product.endereco}</div>
              <div className="cell">{product.cep}</div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListaEditoras;