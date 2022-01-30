import React from 'react';
import { ResultContainer,Status,Result,Live,LiveDetails,Logo,ClubDetails,MatchDetails,Stadium,MatchTime } from './ResultCard.styled';
import useMatches from '../../../../Hooks/UseMatches'
import { Link } from 'react-router-dom';
const ResultCard = () => {
    const{activeMatch,getStandings} = useMatches();
    let { match_live: isLive, match_status: status,match_id:id,match_date:date,match_hometeam_score:homeScore,match_awayteam_score:awayScore,
        match_hometeam_name:homeName,match_awayteam_name:awayName,match_time:time,team_away_badge:awayLogo,team_home_badge:homeLogo,
        match_hometeam_id:homeId,match_awayteam_id:awayId,league_id:leagueId    } = activeMatch; 
    const DefaultClubLogo="https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png"

    return (
        <ResultContainer>
            {isLive==="1" &&<Live>LIVE</Live>}
            <ClubDetails>
               <Logo src={homeLogo?homeLogo:DefaultClubLogo}/> 
               <Link onClick={()=>getStandings(leagueId)} to={"/team/"+ homeId} style={{
                    textDecoration:'none',
                    color: 'inherit'
                }}><span>{homeName}</span></Link>
            </ClubDetails>
            <MatchDetails>
                <MatchTime>
                <span>{date} </span>
                <span>{time}</span>
                </MatchTime>

                <Result live ={isLive}>
                    {homeScore}
                                -
                    {awayScore}
                </Result>
                {isLive==="1"
                ?<LiveDetails live ={isLive}>{parseInt(status)<46?"1.Half - ":"2.Half - "}{status}'</LiveDetails>:
                <Status>{status}</Status>
                } 
            

            </MatchDetails>
            <ClubDetails>
                <Logo src={awayLogo?awayLogo:DefaultClubLogo}/>
                <Link onClick={()=>getStandings(leagueId)} to={"/team/"+ homeId} style={{
                    textDecoration:'none',
                    color: 'inherit'
                }}><span>{awayName }</span></Link>
            </ClubDetails>
        </ResultContainer>
    );
};

export default ResultCard;