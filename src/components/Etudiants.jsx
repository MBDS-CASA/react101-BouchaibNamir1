import { useNavigate } from "react-router-dom";
import data from "../data/data.json";
import BasicTable from "./BasicTable";

export default function Etudiants() {
  const navigate = useNavigate();

  const rows = data.map((n) => ({
    id: n.student.id,
    prenom: n.student.firstname,
    nom: n.student.lastname,
    action: (
      <button
        onClick={() => navigate(`/etudiants/${n.student.id}`)}
        style={{
          padding: "6px 12px",
          borderRadius: 8,
          border: "none",
          background: "#1e8e3e",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Détails
      </button>
    ),
  }));

  const columns = [
    { key: "id", label: "ID" },
    { key: "prenom", label: "Prénom" },
    { key: "nom", label: "Nom" },
    { key: "action", label: "Actions" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Étudiants</h1>
      <BasicTable columns={columns} rows={rows} />
    </main>
  );
}
