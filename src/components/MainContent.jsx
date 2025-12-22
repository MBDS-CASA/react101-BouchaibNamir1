import { useEffect, useState } from "react";
import SearchById from "./SearchById";

function MainContent() {
  const [now, setNow] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const jour = String(now.getDate()).padStart(2, "0");
  const mois = String(now.getMonth() + 1).padStart(2, "0");
  const annee = now.getFullYear();

  const heure = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconde = String(now.getSeconds()).padStart(2, "0");

  return (
    <main className="main">
      <p className="info">
        Bonjour, on est le {jour}/{mois}/{annee} et il est {heure}:{minute}:{seconde}
      </p>

      <p className="hint">Ici, nous afficherons des informations intéressantes :)</p>

      <div className="card">
        <button className="btn" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Recherche dans le JSON */}
      <SearchById />
    </main>
  );
}

export default MainContent;
