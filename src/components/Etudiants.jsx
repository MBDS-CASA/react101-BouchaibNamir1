import data from "../data/data.json";
import BasicTable from "./BasicTable";

export default function Etudiants() {
  const rows = data.map((n) => ({
    id: n.student.id,
    prenom: n.student.firstname,
    nom: n.student.lastname,
  }));

  const columns = [
    { key: "id", label: "ID" },
    { key: "prenom", label: "Prénom" },
    { key: "nom", label: "Nom" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Étudiants</h1>
      <BasicTable columns={columns} rows={rows} />
    </main>
  );
}
