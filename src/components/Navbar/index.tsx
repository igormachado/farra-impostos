import { Link } from "react-router-dom";
import { Departamentos } from "../Departamentos";
import "./style.css";

export function NavbarComponent() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        {/* <!-- header --> */}
        <a className="navbar-brand" href="#" id="farra">
          FARRA DOS IMPOSTSOS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item" id="home">
                <a
                  type="button"
                  className="btn btn-primary"
                  href="#"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </Link>

            <li className="nav-item">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                id="doar"
              >
                Doar
              </button>

              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Doar para o projeto
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <span>Bitcoin: bc1qh45lc66c74f56ynfgpyws <br/> pyd73csgmncctvnsz</span>
                      <br/>
                      <br/>
                      <span>Ethereum: 0xDeF895cA116AEa7B91ebD71<br/>3dabf16Cf8C65761F</span>
                      <br/>
                      <br/>
                      <span>
                        USD COIN: 0xDeF895cA116AEa7B91e<br/>bD713dabf16Cf8C65761F
                      </span>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Obrigado pela ajuda!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
            </li>
            <Departamentos />
          </ul>
        </div>
      </div>
    </nav>
  );
}
