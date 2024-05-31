import gif01 from "../../assets/gifs-de-construcao-23.gif";
import "./styles.css";

export function GovernoRJ() {
  return (
    <>
      <h2 className="d-flex justify-content-center" id="governorj">Governo RJ</h2>
      <div id="gif-construcao">
      <img src={gif01} alt="construcao" />
      </div>
    </>
  );
}
