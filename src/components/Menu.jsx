import "./Menu.css";

export default function Menu({ activeKey, onChange }) {
  const items = [
    { key: "ACCUEIL", label: "Accueil" },
    { key: "NOTES", label: "Notes" },
    { key: "ETUDIANTS", label: "Etudiants" },
    { key: "MATIERES", label: "Matières" },
    { key: "APROPOS", label: "A propos" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        {/* Mets ton logo dans /public/logo.png (tu l’as ouvert dans VSCode) */}
        <img className="sidebar__logo" src="/logo.png" alt="EMSI" />
        <div className="sidebar__title">EMSI | Plateforme d’apprentissage</div>
      </div>

      <div className="sidebar__menu">
        {items.map((it) => (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange(it.key)}
            className={`sidebar__btn ${activeKey === it.key ? "is-active" : ""}`}
          >
            {it.label}
          </button>
        ))}
      </div>
    </aside>
  );
}
