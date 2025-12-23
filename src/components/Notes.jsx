import { useMemo } from "react";
import data from "../data/data.json";

import DataTable from "./DataTable";

export default function Notes() {
  const rows = useMemo(() => {
    return data.map((n) => ({
      id: n.unique_id,
      cours: n.course,
      etudiant: `${n.student.firstname} ${n.student.lastname}`,
      date: n.date,
      note: n.grade,
    }));
  }, []);

  const columns = [
    { key: "id", label: "Unique ID" },
    { key: "cours", label: "Cours" },
    { key: "etudiant", label: "Étudiant" },
    { key: "date", label: "Date" },
    { key: "note", label: "Note" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Notes</h1>

      {/* même rendu pro que Étudiants */}
      <div style={{ width: "min(1100px, 92%)", margin: "0 auto" }}>
        <DataTable columns={columns} rows={rows} />
      </div>
    </main>
  );
}
