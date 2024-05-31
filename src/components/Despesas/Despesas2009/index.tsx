import desepsas2009 from "../../../csv/despesas/2009/2009.json";

export function Desepesas2009() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Despesas 2009
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2009.map((despesa) => {
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
