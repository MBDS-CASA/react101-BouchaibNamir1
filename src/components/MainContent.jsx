import { useEffect, useState } from "react";
import SearchById from "./SearchById";

export default function MainContent() {
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const jour = String(now.getDate()).padStart(2, "0");
  const mois = String(now.getMonth() + 1).padStart(2, "0");
  const annee = now.getFullYear();

  const heure = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  return (
    <main className="main">
      <h1 className="app-title">EMSI | Plateforme d’apprentissage</h1>

      <p className="info">
        Bonjour, on est le {jour}/{mois}/{annee} et il est {heure}:{minute}:{second}
      </p>

      <p className="hint">Ici, nous afficherons des informations intéressantes :)</p>

      <div className="card">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>

      <SearchById />
    </main>
  );
}
