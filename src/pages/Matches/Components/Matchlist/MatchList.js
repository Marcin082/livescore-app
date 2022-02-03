import React from "react";
import {
  LeagueLink,
  MatchListContainer,
  LeagueDetails,
  CountryLogo,
  RightArrow,
} from "./MatchList.styled";
import Match from "../../../../Components/Match/Match";
import { SortByLeague } from "../../../../Helpers/MatchesSort";
import useMatches from "../../../../Hooks/UseMatches";
const MatchList = () => {
  const { matches } = useMatches();

  let LeaguesMatches = SortByLeague(matches);

  return (
    <MatchListContainer>
      {LeaguesMatches.map((leagueMatches, index) => {
        return (
          <LeagueLink to={"league/" + leagueMatches[0].league_id}>
            <LeagueDetails>
              <section>
                <div>
                  <CountryLogo
                    src={
                      leagueMatches[0].country_logo
                        ? leagueMatches[0].country_logo
                        : leagueMatches[0].league_logo
                    }
                  />
                </div>
                <div>
                  {leagueMatches[0].league_name}
                  <span>{leagueMatches[0].country_name}</span>
                </div>
              </section>
              <section>
                <RightArrow />
              </section>
            </LeagueDetails>
            <LeagueMatches key={index} leagueMatches={leagueMatches} />
          </LeagueLink>
        );
      })}
    </MatchListContainer>
  );
};
export const LeagueMatches = ({ activeOption, leagueMatches }) => {
  return (
    <>
      {leagueMatches.map((match) => {
        return (
          <Match
            activeOption={activeOption}
            key={match.match_id}
            match={match}
            leagueMatches={leagueMatches}
          />
        );
      })}
    </>
  );
};
export default MatchList;
