
import { Link } from "react-router-dom";
import "./styles.css";

export function Departamentos() {
  return (
    <>
      <div>
        <li className="nav-item dropdown">
          <a
            type="button"
            className="btn btn-primary"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Departamentos
          </a>
          <ul
            id="departamento-container"
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/PrefeituraRJ">
              <li>
                <a className="dropdown-item" href="#" id="prefeitura-rj">
                  Prefeitura
                </a>
              </li>
            </Link>
            <Link to="/GovernoRJ">
              <li>
                <a className="dropdown-item" href="#" id="governo-rj">
                  Governo
                </a>
              </li>
            </Link>
            <Link to="ImpostoProdutos">
              <li>
                <a className="dropdown-item" href="#" id="produtos">
                  Impostos
                </a>
              </li>
            </Link>
          </ul>
        </li>
      </div>
    </>
  );
}
