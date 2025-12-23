import data from "../data/data.json";
import BasicTable from "./BasicTable";

export default function Notes() {
  const rows = data.map((n) => ({
    id: n.unique_id,
    cours: n.course,
    etudiant: `${n.student.firstname} ${n.student.lastname}`,
    date: n.date,
    note: n.grade,
  }));

  const columns = [
    { key: "id", label: "ID" },
    { key: "cours", label: "Cours" },
    { key: "etudiant", label: "Étudiant" },
    { key: "date", label: "Date" },
    { key: "note", label: "Note" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Notes</h1>
      <BasicTable columns={columns} rows={rows} />
    </main>
  );
}
