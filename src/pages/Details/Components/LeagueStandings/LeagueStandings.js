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
} from "../../../Match/Components/Standings/Standings.styled";
import useMatches from "../../../../Hooks/UseMatches";
import { Link } from "react-router-dom";
import { Alert } from "../../../Match/Components/Comments/Comments.styled";
import { Container } from "./LeagueStandings.styled";
const LeagueStandings = () => {
  const { standings, getStandings } = useMatches();
  console.log(standings);
  const groups = []
  const groupStandings = []

  const promotions = [];
  let data = [];
  if(standings.overall_promotion||standings){
    for (let i = 0; i < standings.length; i++) {
      if (standings[i].overall_promotion) {
        promotions.push(standings[i].overall_promotion);
      }
      if (!groups.includes(standings[i].league_round)&&standings[i].league_round) {
        console.log("aa")
        groupStandings.push(
          standings.filter(
            (club) => club.league_round === standings[i].league_round
          )
        );
        groups.push(standings[i].league_round);
      }
  
    }
  }
  data = promotions.filter(function (item, pos) {
      return promotions.indexOf(item) == pos;
    });  

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
  
  console.log(groupStandings)
  return (
    <Container>
      <StandingsContiner>
        {standings.length > 1 ?(
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
                overall_league_position: position,
                league_id: leagueId,
                team_id: Id,
              } = club;

              for (j; j < standings.length; ) {
                if (promotion !== data[j] && club.overall_promotion !== "") {
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
                        {position}
                      </Position>
                      <Logo src={logo} />
                      <Link
                        onClick={() => getStandings(leagueId)}
                        to={"/team/" + Id}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <Name>{name}</Name>
                      </Link>
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
    </Container>
  );
};

export default LeagueStandings;
