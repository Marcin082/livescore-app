import React from "react";
import { Nav, Button } from "./Navbar.styled";

const Navbar = ({ teamID, playerID, activeOption, setActiveOption }) => {
  return (
    <Nav>
      {!playerID && (
        <>
          <Button
            active={activeOption === "Standings" ? "true" : ""}
            onClick={() => setActiveOption("Standings")}
          >
            Standings
          </Button>
          <Button
            active={activeOption === "Results" ? "true" : ""}
            onClick={() => setActiveOption("Results")}
          >
            Results
          </Button>
          <Button
            active={activeOption === "Upcoming" ? "true" : ""}
            onClick={() => setActiveOption("Upcoming")}
          >
            Upcoming
          </Button>
        </>
      )}
      {teamID && (
        <Button
          active={activeOption === "Players" ? "true" : ""}
          onClick={() => setActiveOption("Players")}
        >
          Players
        </Button>
      )}
    </Nav>
  );
};

export default Navbar;
