import { useState } from "react";

export default function SearchById() {
  const [id, setId] = useState("");

  const handleSearch = () => {
    // pour l’instant on laisse simple (tu complèteras après)
    console.log("Search ID:", id);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Entrer un unique_id (ex: 1)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Chercher</button>
    </div>
  );
}
