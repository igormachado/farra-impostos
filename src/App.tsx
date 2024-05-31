import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrefeituraRJ } from "./components/PrefeituraRJ";
import { GovernoRJ } from "./components/GovernoRJ";
import { ImpostoProdutos } from "./components/ImpostoProdutos";
import { NavbarComponent } from "./components/Navbar";
import { Layout } from "./Router";
import { Article } from "./components/Article";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Article />} />
          <Route path="PrefeituraRJ" element={<PrefeituraRJ />} />
          <Route path="GovernoRJ" element={<GovernoRJ />} />
          <Route path="ImpostoProdutos" element={<ImpostoProdutos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
