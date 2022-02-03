import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from "./App.styled";
import Routess from "../routes/Routes";
import { useEffect } from "react";
import useMatches from "../Hooks/UseMatches";
function App() {
  const { getLeagues } = useMatches();
  useEffect(() => {
    getLeagues();
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Routess />
      </AppContainer>
    </Router>
  );
}

export default App;
