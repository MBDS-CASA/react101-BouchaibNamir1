import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

import DataTable from "./DataTable";

// MUI
import Button from "@mui/material/Button";

export default function Etudiants() {
  const navigate = useNavigate();

  // Liste unique des étudiants (pas répétée)
  const students = useMemo(() => {
    const map = new Map();
    data.forEach((n) => {
      const s = n.student;
      if (s?.id && !map.has(s.id)) {
        map.set(s.id, { id: s.id, prenom: s.firstname, nom: s.lastname });
      }
    });
    return Array.from(map.values());
  }, []);

  const rows = students.map((s) => ({
    id: s.id,
    prenom: s.prenom,
    nom: s.nom,
    details: (
      <Button
        variant="contained"
        size="small"
        onClick={() => navigate(`/etudiants/${s.id}`)}
        sx={{ textTransform: "none", borderRadius: 2 }}
      >
        Détails
      </Button>
    ),
  }));

  const columns = [
    { key: "id", label: "ID" },
    { key: "prenom", label: "Prénom" },
    { key: "nom", label: "Nom" },
    { key: "details", label: "Détails" },
  ];

  return (
    <main className="main">
      <h1 className="app-title">Etudiants</h1>

      {/* ✅ on garde ton design, juste un container propre */}
      <div style={{ width: "min(1100px, 92%)", margin: "0 auto" }}>
        <DataTable columns={columns} rows={rows} />
      </div>
    </main>
  );
}
