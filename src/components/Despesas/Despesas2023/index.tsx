import desepsas2023 from "../../../csv/despesas/2023/2023.json";

export function Despesas2023() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSixteen"
            aria-expanded="false"
            aria-controls="flush-collapseSixteen"
          >
            Despesas 2023
          </button>
        </h2>
        <div
          id="flush-collapseSixteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2023.map((despesa) => {
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
