import { Acessorios } from "./Acessorios/inex";
import "./styles.css";

export function ImpostoProdutos() {
  return (
    <>
      <h2
        className="d-flex justify-content-center table-responsive"
        id="produtoImposto"
      >
        Imposto dos produtos
      </h2>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Acessórios
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <table className="table table-responsive" id="table-acessorios">
                <Acessorios />
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
