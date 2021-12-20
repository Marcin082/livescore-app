import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from '../Header/Header'
import Matches from '../../pages/Matches/Matches'
import { AppContainer } from './App.styled';
function App() {
 
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/matches" element={<Matches />}>
          </Route>
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
