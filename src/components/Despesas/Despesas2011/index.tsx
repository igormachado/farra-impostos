import desepsas2011 from "../../../csv/despesas/2011/2011.json";

export function Despesas2011() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Despesas 2011
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2011.map((despesa) => {
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
