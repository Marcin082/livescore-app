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
  const EUROPA_LEAGUE_BADGE="https://apiv3.apifootball.com/badges/logo_leagues/4_uefa-europa-league.png"
  const CONFERENCE_LEAGUE_BADGE="https://www.colossusbets.com/blog/wp-content/uploads/2021/09/UECL-970x545-1.png"
  const DEFAULT_BADGE="https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png"
console.log(LeaguesMatches)
  return (
    <MatchListContainer>
      {LeaguesMatches.map((leagueMatches, index) => {
        return (
          <LeagueLink to={"league/" + leagueMatches[0].league_id}>
            <LeagueDetails>
              <section>
                <div>
                  <CountryLogo
                  onError={DEFAULT_BADGE}
                    src={
                      leagueMatches[0].league_id!=="4"
                        ? (leagueMatches[0].league_id==="683"?
                        CONFERENCE_LEAGUE_BADGE:
                        (leagueMatches[0].country_logo
                           ?leagueMatches[0].country_logo
                           :(leagueMatches[0].league_logo?leagueMatches[0].league_logo:DEFAULT_BADGE)))
                        : EUROPA_LEAGUE_BADGE
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
