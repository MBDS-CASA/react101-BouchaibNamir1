import MainContent from "./MainContent";

export default function ContentView({ activeKey }) {
  if (activeKey === "ACCUEIL") return <MainContent />;

  const labels = {
    NOTES: "Notes",
    ETUDIANTS: "Etudiants",
    MATIERES: "Matières",
    APROPOS: "A propos",
  };

  return (
    <main className="main">
      <h1 className="app-title">{labels[activeKey]}</h1>
      <p className="hint">Contenu : {labels[activeKey]}</p>
    </main>
  );
}
