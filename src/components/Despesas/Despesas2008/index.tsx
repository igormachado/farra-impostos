import desepsas2008 from "../../../csv/despesas/2008/2008.json";

export function Desepesas2008() {
  return (
    <>
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
            Despesas 2008
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2008.map((despesa) => {
            return (
                <div className="accordion-body" key={despesa.Orgao}>
                {`${despesa.Orgao}: R$ ${despesa.ValorPago}`}
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
