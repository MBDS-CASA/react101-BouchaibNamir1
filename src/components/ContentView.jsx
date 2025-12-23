import MainContent from "./MainContent";
import Notes from "./Notes";
import Etudiants from "./Etudiants";
import Matieres from "./Matieres";
import Apropos from "./Apropos";

export default function ContentView({ activeKey }) {
  switch (activeKey) {
    case "ACCUEIL":
      return <MainContent />;
    case "NOTES":
      return <Notes />;
    case "ETUDIANTS":
      return <Etudiants />;
    case "MATIERES":
      return <Matieres />;
    case "APROPOS":
      return <Apropos />;
    default:
      return <MainContent />;
  }
}
