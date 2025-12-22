import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

// Composant Content
function Content() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <p style={{ marginTop: "20px" }}>
        Ici, nous afficherons des informations intéressantes :)
      </p>
    </main>
  );
}

// Composant principal App
function App() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center" }}>MBDS + EMSI</h1>
      <Content />
    </>
  );
}

export default App;
