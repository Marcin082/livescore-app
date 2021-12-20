import React, { useState } from 'react';
import { ClubLogo, MatchCard,Centered, Line, LiveContainer, Scores,InfoContainer, StarFillLogo, StarOutLogo, } from './Match.styled';
import useMatches from '../../Hooks/UseMatches';

const Match = ({match,leagueMatches}) => {    
    const[error,SetError]  = useState(false)
    const DefaultClubLogo="https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png"
    const{FavMatchesOptions,fav} = useMatches();
    return (
        <MatchCard >
            {match.match_live === "1" &&
            <Line>
                <span>{match.match_status==="Half Time"?"HT":match.match_status}'</span>
            </Line> 
            }
            <Centered>
            
            <article>
                {match.match_hometeam_name} {!error?<ClubLogo onError={()=>SetError(true)} src={match.team_home_badge}/> :<ClubLogo src={DefaultClubLogo}/>}
            </article> 
            <section>
                <div>
                <Scores>{match.match_hometeam_score}</Scores>
               {match.match_status===''?  match.match_time: (match.match_status=="Postponed"?"Postponed": "-")}
                <Scores>{match.match_awayteam_score}</Scores>
                </div>
            </section>
            <article>
            {!error?<ClubLogo onError={()=>SetError(true)}  src={match.team_away_badge}/>:<ClubLogo src={DefaultClubLogo}/>} {match.match_awayteam_name} 
            </article> 
            
            </Centered>
            <InfoContainer>
                {match.match_live === "1" &&
                    <LiveContainer>LIVE</LiveContainer>
                }
                {fav.includes(match.match_id)?
                <StarFillLogo onClick={()=>{
                    FavMatchesOptions('delete',match.match_id)
                }}/>:
                <StarOutLogo  onClick={()=>{
                    console.log("hello")
                    FavMatchesOptions('add',match.match_id)
                }}/>}
            </InfoContainer>   
        </MatchCard>
    );
};

export default Match;