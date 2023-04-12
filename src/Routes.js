import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Menu from "./Components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
