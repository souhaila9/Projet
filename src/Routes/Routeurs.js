import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Accueil from "../pages/Accueil";
import Actualités from "../pages/Actualités";
import Contact from "../pages/Contact";
import Inscriptions from "../pages/Inscriptions";
import Blog from "../pages/Blog";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/Accueil" />} />
      <Route path="/Actualités" element={<Actualités />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Inscriptions" element={<Inscriptions />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Accueil" element={<Accueil />} />

    </Routes>
  );
};

export default Routers;