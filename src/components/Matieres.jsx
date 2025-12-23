import data from "../data/data.json";
import BasicTable from "./BasicTable";

export default function Matieres() {
  // on extrait les matières uniques
  const rows = [...new Set(data.map((n) => n.course))].map((c, index) => ({
    id: index + 1,
    matiere: c,
  }));

  const columns = [
    { key: "id", label: "ID" },
    { key: "matiere", label: "Matière" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Matières</h1>
      <BasicTable columns={columns} rows={rows} />
    </main>
  );
}
