import desepsas2017 from "../../../csv/despesas/2017/2017.json";

export function Despesas2017() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTen"
            aria-expanded="false"
            aria-controls="flush-collapseTen"
          >
            Despesas 2017
          </button>
        </h2>
        <div
          id="flush-collapseTen"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2017.map((despesa) => {
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
