import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Menu from "./Components/Menu";
import Footer from "Components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
