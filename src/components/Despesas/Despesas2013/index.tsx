import desepsas2013 from "../../../csv/despesas/2013/2013.json";

export function Despesas2013() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseSix"
            aria-expanded="false"
            aria-controls="flush-collapseSix"
          >
            Despesas 2013
          </button>
        </h2>
        <div
          id="flush-collapseSix"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2013.map((despesa) => {
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
