import { useState } from "react";
import Menu from "./components/Menu";
import ContentView from "./components/ContentView";
import "./App.css";

export default function App() {
  const [activeKey, setActiveKey] = useState("ACCUEIL");

  return (
    <div className="layout">
      <Menu activeKey={activeKey} onChange={setActiveKey} />
      <ContentView activeKey={activeKey} />
    </div>
  );
}
