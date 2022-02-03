import React from "react";
import UseMatches from "../../../../Hooks/UseMatches";
import {
  LeagueDetailsContainer,
  LeagueLogo,
  Name,
  Country,
  ContentInfo,
} from "./LeagueDetails.styled";

const Info = ({ playerID, teamID }) => {
  const { league, team, player } = UseMatches();
  const DefaultClubLogo =
    "https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png";
  const DefaultFace =
    "https://us.123rf.com/450wm/apoev/apoev2107/apoev210700046/171681529-default-avatar-photo-placeholder-gray-profile-picture-icon-man-in-t-shirt.jpg?ver=6";
  let SRC = null;
  let NAME = null;
  let COUNTRY = null;
  console.log(team);

  if (playerID) {
    if (player) {
      SRC = player.player_image ? player.player_image : DefaultFace;
      NAME = player.player_name;
      COUNTRY = "";
    }
  }
  if (teamID) {
    if (team) {
      console.log(teamID);
      SRC = team.team_badge ? team.team_badge : DefaultClubLogo;
      NAME = team.team_name;
      COUNTRY = "";
    }
  }
  if (league) {
    if (league.length > 0) {
      SRC = league[0].league_logo;
      NAME = league[0].league_name;
      COUNTRY = league[0].country_name;
    }
  }
  console.log(SRC, NAME, COUNTRY);
  return (
    <LeagueDetailsContainer>
      <ContentInfo>
      <div>
          <LeagueLogo src={SRC} />
      </div>
      <div>
        <Name>{NAME}</Name>
        <Country>{COUNTRY}</Country>
      </div>
      </ContentInfo>
    </LeagueDetailsContainer>
  );
};

export default Info;
