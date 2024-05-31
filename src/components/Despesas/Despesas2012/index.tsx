import desepsas2012 from "../../../csv/despesas/2012/2012.json";

export function Despesas2012() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFive"
            aria-expanded="false"
            aria-controls="flush-collapseFive"
          >
            Despesas 2012
          </button>
        </h2>
        <div
          id="flush-collapseFive"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2012.map((despesa) => {
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
