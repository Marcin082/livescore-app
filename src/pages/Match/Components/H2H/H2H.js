import React from "react";
import { H2HContainer } from "./H2H.styled";
import useMatches from "../../../../Hooks/UseMatches";
import { Head } from "../Details/Details.styled";
import { LeagueMatches } from "../../../Matches/Components/Matchlist/MatchList";
import { Alert } from "../../Components/Comments/Comments.styled";
const H2H = ({ activeOption }) => {
  const { h2h, activeMatch } = useMatches();

  const result = [];

  for (let i in h2h) {
    result.push([i, h2h[i]]);
  }
  console.log(result);
  const between = result[0];
  const First = result[1];
  const Second = result[2];
  return (
    <H2HContainer>
      {result.length > 0 ? (
        <>
          <Head>Between</Head>
          <LeagueMatches
            activeOption={activeOption}
            leagueMatches={between[1]}
          />
          <Head>{activeMatch.match_hometeam_name} last matches</Head>
          <LeagueMatches activeOption={activeOption} leagueMatches={First[1]} />
          <Head>{activeMatch.match_awayteam_name} last matches</Head>
          <LeagueMatches
            activeOption={activeOption}
            leagueMatches={Second[1]}
          />
        </>
      ) : (
        <Alert>This clubs has no H2H data</Alert>
      )}
    </H2HContainer>
  );
};

export default H2H;
