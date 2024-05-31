import desepsas2015 from "../../../csv/despesas/2015/2015.json";

export function Despesas2015() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseEight"
            aria-expanded="false"
            aria-controls="flush-collapseEight"
          >
            Despesas 2015
          </button>
        </h2>
        <div
          id="flush-collapseEight"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2015.map((despesa) => {
            return (
              <div className="accordion-body" key={despesa.Orgao}>
                {`${despesa.Orgao}: R$ ${despesa["Valor Pago"]}`}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
