import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
        <button>
          <Link to="/home">
            Home
          </Link> 
        </button>
        <button>
          <Link to='/contatos'>
            Contatos
          </Link>
        </button>
        <button>
          <Link to='/sobre'>
            Sobre
          </Link>
        </button>
    </div>
);
}

export default Menu;