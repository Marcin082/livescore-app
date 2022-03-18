import React from "react";
import {
  StandingsContiner,
  Promotion,
  Square,
  Legend,
  Option,
  ClubCard,
  Position,
  Name,
  Logo,
  Info,
  Details,
  Goals,
  Value,
} from "./Standings.styled";
import useMatches from "../../../../Hooks/UseMatches";
import { Alert } from "../../Components/Comments/Comments.styled";
import {
  LeagueDetails,
  CountryLogo,
  RightArrow,
} from "../../../Matches/Components/Matchlist/MatchList.styled";
import { Link } from "react-router-dom";
const Standings = () => {
  const { standings, activeMatch, country, getStandings } = useMatches();
  console.log(standings);
  const EUROPA_LEAGUE_BADGE="https://apiv3.apifootball.com/badges/logo_leagues/4_uefa-europa-league.png"
  const CONFERENCE_LEAGUE_BADGE="https://www.colossusbets.com/blog/wp-content/uploads/2021/09/UECL-970x545-1.png"
  const DEFAULT_BADGE="https://upload.wikimedia.org/wikipedia/commons/6/6a/A_blank_flag.png"
  const promotions = [];
  let data = [];
  for (let i = 0; i < standings.length; i++) {
    if (standings[i].overall_promotion) {
      promotions.push(standings[i].overall_promotion);
    }
  }
  data = promotions.filter(function (item, pos) {
    return promotions.indexOf(item) == pos;
  });
  console.log(standings.length);
  let i = -1;
  let j = 0;
  const colors = [
    "#121bc9",
    "lightblue",
    "#c9740c",
    "#257d19",
    "#cd5c5c",
    "red",
  ];

  return (
    <StandingsContiner>
      <Link
        style={{
          textDecoration: "none",
        }}
        to={"/league/" + activeMatch.league_id}
      >
        <LeagueDetails>
          <section>
            <div>
              <CountryLogo
                src={
                  standings[0].league_id!=="4"
                    ? (standings[0].league_id==="683"?
                    CONFERENCE_LEAGUE_BADGE:
                    (country[0].country_logo
                       ?country[0].country_logo
                       :(country[0].league_logo?country[0].league_logo:DEFAULT_BADGE)))
                    : EUROPA_LEAGUE_BADGE
                }
              />
            </div>
            <div>
              {activeMatch.league_name}
              <span>{activeMatch.country_name}</span>
            </div>
          </section>
          <section>
            <RightArrow />
          </section>
        </LeagueDetails>
      </Link>
      {standings.length > 1 ? (
        <>
          <ClubCard className="nav">
            <Info>
              <Position>#</Position>
              <div>Team</div>
            </Info>
            <Details>
              <Value>M</Value>
              <Value>L</Value>
              <Value>W</Value>
              <Goals>B</Goals>
              <Value>Pts</Value>
            </Details>
          </ClubCard>

          {standings.map((club) => {
            let {
              overall_promotion: promotion,
              team_badge: logo,
              team_name: name,
              overall_league_payed: matchesPlayed,
              overall_league_W: leagueWins,
              overall_league_L: leagueLost,
              overall_league_GF: goalsScored,
              overall_league_GA: goalsLost,
              overall_league_PTS: leaguePoints,
              league_id: leagueId,
              team_id: Id,
            } = club;
            for (j; j < standings.length; ) {
              if (promotion !== data[j] && promotion !== "") {
                j++;
              }
              if (promotion.includes("Play-off")) {
                colors[j] = "lightblue";
              }
              if (promotion.includes("Relegation")) {
                colors[j] = "red";
                if (promotion.includes("Play-off")) {
                  colors[j] = "#cd5c5c";
                }
              }
              if (promotion.includes("Europa")) {
                colors[j] = "#c9740c";
              }
              if (promotion.includes("Conference")) {
                colors[j] = "#257d19";
              }
              if (promotion.includes("(Relegation)")) {
                colors[j] = "#cd5c5c";
              }
              return (
                <ClubCard>
                  <Info>
                    <Position
                      color={promotion === "" ? "transparent" : colors[j]}
                    >
                      {club.overall_league_position}
                    </Position>
                    <Logo src={logo} />
                    <Name>
                      <Link
                        onClick={() => getStandings(leagueId)}
                        to={"/team/" + Id}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        {name}
                      </Link>
                    </Name>
                  </Info>
                  <Details>
                    <Value>{matchesPlayed}</Value>
                    <Value>{leagueWins}</Value>
                    <Value>{leagueLost}</Value>
                    <Goals>
                      {goalsScored}:{goalsLost}
                    </Goals>
                    <Value>{leaguePoints}</Value>
                  </Details>
                </ClubCard>
              );
            }
          })}
        </>
      ) : (
        <Alert>This League has no Standings</Alert>
      )}
      <Legend>
        {data.map((action) => {
          i++;
          for (i; i < colors.length; ) {
            console.log(i);
            return (
              <Promotion>
                <Square color={colors[i]}></Square>-<Option>{action}</Option>
              </Promotion>
            );
          }
        })}
      </Legend>
    </StandingsContiner>
  );
};

export default Standings;
