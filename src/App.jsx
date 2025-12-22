import { useState } from "react";
import Menu from "./components/Menu";
import ContentView from "./components/ContentView";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [activeKey, setActiveKey] = useState("ACCUEIL");

  return (
    <div className="layout">
      <Menu activeKey={activeKey} onChange={setActiveKey} />

      <div className="main">
        <ContentView activeKey={activeKey} />
        <Footer />   {/* ✅ TOUJOURS EN BAS, POUR TOUS LES MENUS */}
      </div>
    </div>
  );
}
