import React from "react";
import { NavCard, Option } from "./MatchDetailsNav.styled";
import useMatches from "../../../../Hooks/UseMatches";

const MatchDetailsNav = ({ activeOption, setActiveOption }) => {
  const { activeMatch } = useMatches();

  let { match_live: isLIve, match_status: status } = activeMatch;
  console.log(activeMatch);
  return (
    <NavCard>
      <Option
        active={activeOption === "Details" ? "true" : ""}
        onClick={() => setActiveOption("Details")}
      >
        Details
      </Option>
      {status !== "" && (
        <>
          <Option
            active={activeOption === "Stats" ? "true" : ""}
            onClick={() => setActiveOption("Stats")}
          >
            Stats
          </Option>
          <Option
            active={activeOption === "Lineups" ? "true" : ""}
            onClick={() => setActiveOption("Lineups")}
          >
            Lineups
          </Option>
          {isLIve === "1" && (
            <Option
              active={activeOption === "Comment" ? "true" : ""}
              onClick={() => setActiveOption("Comment")}
            >
              Comment
            </Option>
          )}
        </>
      )}
      <Option
        active={activeOption === "H2H" ? "true" : ""}
        onClick={() => setActiveOption("H2H")}
      >
        H2H
      </Option>
      <Option
        active={activeOption === "Standings" ? "true" : ""}
        onClick={() => setActiveOption("Standings")}
      >
        Standings
      </Option>
    </NavCard>
  );
};

export default MatchDetailsNav;
