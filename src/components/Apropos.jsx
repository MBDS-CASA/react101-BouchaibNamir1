import Paper from "@mui/material/Paper";

export default function Apropos() {
  return (
    <main className="main">
      <h1 className="app-title">A propos</h1>

      <div style={{ width: "min(800px, 92%)", margin: "0 auto" }}>
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <p style={{ marginTop: 0 }}>
            Ce projet est réalisé par <b>Bouchaib Namir</b> — 2025.
          </p>
          <p style={{ marginBottom: 0 }}>
            EMSI | Plateforme d’apprentissage — Paramètres pédagogiques
          </p>
        </Paper>
      </div>
    </main>
  );
}
