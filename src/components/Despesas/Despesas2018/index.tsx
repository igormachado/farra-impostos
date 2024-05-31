import desepsas2018 from "../../../csv/despesas/2018/2018.json";

export function Despesas2018() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseEleven"
            aria-expanded="false"
            aria-controls="flush-collapseEleven"
          >
            Despesas 2018
          </button>
        </h2>
        <div
          id="flush-collapseEleven"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2018.map((despesa) => {
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
