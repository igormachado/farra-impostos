import { Desepesas2008 } from "../Despesas/Despesas2008";
import { Desepesas2009 } from "../Despesas/Despesas2009";
import { Despesas2010 } from "../Despesas/Despesas2010";
import { Despesas2011 } from "../Despesas/Despesas2011";
import { Despesas2012 } from "../Despesas/Despesas2012";
import { Despesas2013 } from "../Despesas/Despesas2013";
import { Despesas2014 } from "../Despesas/Despesas2014";
import { Despesas2015 } from "../Despesas/Despesas2015";
import { Despesas2016 } from "../Despesas/Despesas2016";
import { Despesas2017 } from "../Despesas/Despesas2017";
import { Despesas2018 } from "../Despesas/Despesas2018";
import { Despesas2019 } from "../Despesas/Despesas2019";
import { Despesas2020 } from "../Despesas/Despesas2020";
import { Despesas2021 } from "../Despesas/Despesas2021";
import { Despesas2022 } from "../Despesas/Despesas2022";
import { Despesas2023 } from "../Despesas/Despesas2023";
import "./styles.css";

export function PrefeituraRJ() {
  return (
    <>
      <h2 className="d-flex justify-content-center" id="header-prefeitura">
        Prefeitura RJ
      </h2>

      <div className="accordion accordion-flush" id="accordionFlushExample">
        <Desepesas2008 />
        <Desepesas2009 />
        <Despesas2010 />
        <Despesas2011 />
        <Despesas2012 />
        <Despesas2013 />
        <Despesas2014 />
        <Despesas2015 />
        <Despesas2016 />
        <Despesas2017 />
        <Despesas2018 />
        <Despesas2019 />
        <Despesas2020 />
        <Despesas2021 />
        <Despesas2022 />
        <Despesas2023 />
      </div>
    </>
  );
}
