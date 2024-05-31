import acessorios from "./acessorios.json";

export function Acessorios() {
  return (
    <>
      <thead>
        <tr>
          <th scope="col">Produto</th>
          <th scope="col">Tributo(imposto %)</th>
        </tr>
      </thead>
      {acessorios.map((acessorio) => {
        return (
          <tbody key={acessorio.acessorio}>
            <tr>
              <td>{acessorio.acessorio}</td>
              <td>{acessorio.imposto}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
