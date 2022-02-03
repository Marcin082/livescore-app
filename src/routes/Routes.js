import Matches from "../pages/Matches/Matches";
import Match from "../pages/Match/Match";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/Details/DetailsPage";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Matches />}></Route>
      <Route exact path="/match/:id" element={<Match />}></Route>
      <Route exact path="/league/:leagueID" element={<DetailsPage />}></Route>
      <Route exact path="/team/:teamID" element={<DetailsPage />}></Route>
      <Route exact path="/player/:playerID" element={<DetailsPage />}></Route>
    </Routes>
  );
};

export default Routess;
