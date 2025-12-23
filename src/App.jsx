import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import MainContent from "./components/MainContent";
import Notes from "./components/Notes";
import Etudiants from "./components/Etudiants";
import Matieres from "./components/Matieres";
import Apropos from "./components/Apropos";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // mapping URL -> activeKey (pour le bouton actif dans le menu)
  const pathToKey = {
    "/": "ACCUEIL",
    "/notes": "NOTES",
    "/etudiants": "ETUDIANTS",
    "/matieres": "MATIERES",
    "/apropos": "APROPOS",
  };

  const activeKey = pathToKey[location.pathname] ?? "ACCUEIL";

  // mapping key -> URL (quand on clique dans le menu)
  const keyToPath = {
    ACCUEIL: "/",
    NOTES: "/notes",
    ETUDIANTS: "/etudiants",
    MATIERES: "/matieres",
    APROPOS: "/apropos",
  };

  const handleMenuChange = (key) => {
    navigate(keyToPath[key] || "/");
  };

  return (
    <div className="app">
      <Menu activeKey={activeKey} onChange={handleMenuChange} />

      <div className="content">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/etudiants" element={<Etudiants />} />
          <Route path="/matieres" element={<Matieres />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
