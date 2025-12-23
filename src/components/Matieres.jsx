import { useMemo } from "react";
import data from "../data/data.json";
import DataTable from "./DataTable";

export default function Matieres() {
  const matieres = useMemo(() => {
    return [...new Set(data.map((n) => n.course))].sort((a, b) =>
      String(a).localeCompare(String(b), "fr", { sensitivity: "base" })
    );
  }, []);

  const rows = matieres.map((m, idx) => ({
    id: idx + 1,
    matiere: m,
  }));

  const columns = [
    { key: "id", label: "#" },
    { key: "matiere", label: "Matière" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Matières</h1>

      <div style={{ width: "min(900px, 92%)", margin: "0 auto" }}>
        <DataTable columns={columns} rows={rows} />
      </div>
    </main>
  );
}
