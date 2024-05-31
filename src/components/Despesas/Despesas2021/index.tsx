import desepsas2021 from "../../../csv/despesas/2021/2021.json";

export function Despesas2021() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFourteen"
            aria-expanded="false"
            aria-controls="flush-collapseFourteen"
          >
            Despesas 2021
          </button>
        </h2>
        <div
          id="flush-collapseFourteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2021.map((despesa) => {
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
