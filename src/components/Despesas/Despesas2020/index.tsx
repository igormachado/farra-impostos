import desepsas2020 from "../../../csv/despesas/2020/2020.json";

export function Despesas2020() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThirteen"
            aria-expanded="false"
            aria-controls="flush-collapseThirteen"
          >
            Despesas 2020
          </button>
        </h2>
        <div
          id="flush-collapseThirteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2020.map((despesa) => {
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
