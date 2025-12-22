import "./Header.css";

function Header() {
  const handleClick = (label) => {
    alert(label);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="EMSI" />
        {/* ✅ Texte pro sous le logo */}
        <h3 className="sidebar-title">Espace pédagogique</h3>
      </div>

      <nav className="sidebar-menu">
        <button onClick={() => handleClick("Notes")}>Notes</button>
        <button onClick={() => handleClick("Etudiants")}>Etudiants</button>
        <button onClick={() => handleClick("Matières")}>Matières</button>
        <button onClick={() => handleClick("A propos")}>A propos</button>
      </nav>
    </aside>
  );
}

export default Header;
