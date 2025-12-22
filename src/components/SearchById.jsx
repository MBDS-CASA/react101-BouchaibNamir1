import { useEffect, useState } from "react";

function SearchById() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(true);

  // Charger data.json depuis public/
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = () => {
    const found =
      data.find((item) => item.unique_id === Number(id)) || null;
    setResult(found);
    setSearched(true);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Entrer un unique_id (ex: 1)"
          style={{
            padding: 10,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: 220,
          }}
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          style={{
            padding: "10px 18px",
            borderRadius: 8,
            background: loading ? "#999" : "#1e8e3e",
            color: "white",
            border: "none",
            fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Chargement..." : "Chercher"}
        </button>
      </div>

      {searched && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          {result ? (
            <div
              style={{
                margin: "0 auto",
                width: "min(600px, 92%)",
                padding: 20,
                borderRadius: 12,
                background: "#f0fff4",
                border: "1px solid #b7e4c7",
                textAlign: "left",
              }}
            >
              <h3>Résultat</h3>
              <p><b>ID :</b> {result.unique_id}</p>
              <p><b>Cours :</b> {result.course}</p>
              <p>
                <b>Étudiant :</b>{" "}
                {result.student.firstname} {result.student.lastname} (id:{" "}
                {result.student.id})
              </p>
              <p><b>Date :</b> {result.date}</p>
              <p><b>Note :</b> {result.grade}</p>
            </div>
          ) : (
            <p style={{ color: "red", fontWeight: "bold" }}>
              Aucun résultat trouvé
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchById;
