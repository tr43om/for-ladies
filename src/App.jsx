import "./App.css";
// import { Input } from "./components/Input";

import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

import { Alena } from "./pages/Alena";
import { Anya } from "./pages/Anya";
import { Diana } from "./pages/Diana";
import { Jenya } from "./pages/Jenya";
import { Katya } from "./pages/Katya";
import { Lina } from "./pages/Lina";
import { VikaB } from "./pages/VikaB";
import { VikaP } from "./pages/VikaP";
import { Home } from "./pages/home/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Lina" element={<Lina />} />
          <Route path="/" element={<Home />} />
          <Route path="/Katya" element={<Katya />} />
          <Route path="/VikaB" element={<VikaB />} />
          <Route path="/VikaP" element={<VikaP />} />
          <Route path="/Alena" element={<Alena />} />
          <Route path="/Jenya" element={<Jenya />} />
          <Route path="/Diana" element={<Diana />} />
          <Route path="/Anya" element={<Anya />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
