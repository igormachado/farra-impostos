import desepsas2014 from "../../../csv/despesas/2014/2014.json";

export function Despesas2014() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSeven"
            aria-expanded="false"
            aria-controls="flush-collapseSeven"
          >
            Despesas 2014
          </button>
        </h2>
        <div
          id="flush-collapseSeven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2014.map((despesa) => {
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
