import React, { useState } from 'react';
import { ClubLogo, MatchCard,Centered, Line, LiveContainer, Scores, StarLogo, } from './Match.styled';
import useMatches from '../../../../Hooks/UseMatches';
import { IoBluetooth } from 'react-icons/io5';

const Match = ({match,leagueMatches}) => {
    const today = new Date()
    const TodayFormat = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate()<10?"0"+today.getDate():today.getDate()) + "T" + today.getHours() + ":" +today.getMinutes() 
    const matchDate = Date.parse(match.match_date +"T"+match.match_time);
    const todayDate = Date.parse(TodayFormat );
    const[error,SetError]  = useState(false)
    const[color,SetColor]  = useState("white")
    const DefaultClubLogo="https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png"
    const{AddFavourite,favourites} = useMatches();
console.log(favourites)
    return (
        <MatchCard >
            {match.match_live === "1" &&
            <Line>
                <span>{match.match_status}{match.match_status==="Half Time"?"":"'"}</span>
            </Line> 
            
            }
            <Centered>
            
            <article>
                {match.match_hometeam_name} {!error?<ClubLogo onError={()=>SetError(true)} src={match.team_home_badge}/> :<ClubLogo src={DefaultClubLogo}/>}
            </article> 
            <section>
                <div>
                <Scores>{match.match_hometeam_score}</Scores>
               {matchDate>todayDate?  match.match_time: (match.match_status=="Postponed"?"Postponed": "-")}
                <Scores>{match.match_awayteam_score}</Scores>
                </div>
            </section>
            <article>
            {!error?<ClubLogo onError={()=>SetError(true)}  src={match.team_away_badge}/>:<ClubLogo src={DefaultClubLogo}/>} {match.match_awayteam_name} 
            </article> 
            
            </Centered>
            {match.match_live === "1" &&
                <LiveContainer>LIVE</LiveContainer>
            }
            
                
        </MatchCard>
    );
};

export default Match;