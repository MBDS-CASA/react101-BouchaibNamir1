import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
