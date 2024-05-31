import desepsas2019 from "../../../csv/despesas/2019/2019.json";

export function Despesas2019() {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwelve"
            aria-expanded="false"
            aria-controls="flush-collapseTwelve"
          >
            Despesas 2019
          </button>
        </h2>
        <div
          id="flush-collapseTwelve"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          {desepsas2019.map((despesa) => {
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
