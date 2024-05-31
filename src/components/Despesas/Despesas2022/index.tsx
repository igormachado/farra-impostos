import desepsas2022 from "../../../csv/despesas/2022/2022.json";

export function Despesas2022() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFifteen"
            aria-expanded="false"
            aria-controls="flush-collapseFifteen"
          >
            Despesas 2022
          </button>
        </h2>
        <div
          id="flush-collapseFifteen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2022.map((despesa) => {
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
