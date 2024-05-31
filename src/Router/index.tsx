import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/">Article</Link>
            </li>
          <li>
            <Link to="/PrefeituraRJ">Prefeitura</Link>
          </li>
          <li>
            <Link to="/GovernoRJ">Governo</Link>
          </li>
          <li>
            <Link to="/ImpostoProdutos">Imposto</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};