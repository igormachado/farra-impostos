import desepsas2010 from "../../../csv/despesas/2010/2010.json";

export function Despesas2010() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Despesas 2010
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2010.map((despesa) => {
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
