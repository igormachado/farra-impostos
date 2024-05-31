import desepsas2016 from "../../../csv/despesas/2016/2016.json";

export function Despesas2016() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseNine"
            aria-expanded="false"
            aria-controls="flush-collapseNine"
          >
            Despesas 2016
          </button>
        </h2>
        <div
          id="flush-collapseNine"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2016.map((despesa) => {
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
