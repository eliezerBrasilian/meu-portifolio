import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import { Rotas } from "../enums/Rotas";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { SocialMedia } from "../pages/SocialMedia";
import { Header } from "./Header";

export function RoutesApp() {
  const projectRoute = Rotas.PROJETOS + "/:tag";
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path={Rotas.HOME} element={<Home />} />

        <Route path={projectRoute} element={<Projects />} />
        <Route path={Rotas.REDES_SOCIAIS} element={<SocialMedia />} />
      </Routes>
    </BrowserRouter>
  );
}
