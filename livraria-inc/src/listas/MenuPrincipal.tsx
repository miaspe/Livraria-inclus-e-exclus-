import { Link } from 'react-router-dom';

const MenuPrincipal = () => {
  return (
    <div className="menu-principal">
      <h1>Minha Aplicação</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="/consulta">Consulta</Link>
          </li>
          <li>
            <Link to="/editar">Editar</Link>
          </li>
          <li>
            <Link to="/remover">Remover</Link>
          </li>
          <li>
            <Link to="/acrescentar">Acrescentar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPrincipal;
//------------------------------------------------------
/*

function Home() {
  return (
    <div>
      <h1>Home Livraria</h1>
      <img src="figura-aqui.png" alt="Figura aqui" />
    </div>
);
}

export default Home;

*/