import React, { useState } from 'react';
import { ClubLogo, Date,NameAndLogo,MatchCard,Centered, Line, LiveContainer, Scores,InfoContainer, StarFillLogo, StarOutLogo, MatchLink} from './Match.styled';
import useMatches from '../../Hooks/UseMatches';
import { Link } from 'react-router-dom';
const Match = ({activeOption,match,leagueMatches}) => {
    let { match_live: isLive, match_status: status,match_id:id,match_date:date,match_hometeam_score:homeScore,match_awayteam_score:awayScore,
        match_hometeam_name:homeName,match_awayteam_name:awayName,match_time:time,team_away_badge:awayLogo,team_home_badge:homeLogo,
        match_awayteam_id:awayId,match_hometeam_id:homeId,league_id:leagueId,
        } = match;    
    const[SrcAway,SetSrcAway]  = useState(awayLogo)
    const[SrcHome,SetSrcHome]  = useState(homeLogo)
    const DefaultClubLogo="https://www.precisionpass.co.uk/wp-content/uploads/2018/03/default-team-logo.png"
    const{FavMatchesOptions,fav,getStandings} = useMatches();
    return (
       <MatchLink to={"/match/"+ id}> <MatchCard >
            {isLive === "1" &&
            <Line >
                <span>{status==="Half Time"?"HT":status}'</span>
            </Line> 
            }
            {(activeOption==="H2H"||activeOption==="Results"||activeOption==="Upcoming")&& isLive!=="1"&&<Date>{date}</Date>}
            <Centered>
            
            <NameAndLogo style={{
                    fontWeight:parseInt(homeScore) > parseInt(awayScore)?'500':'400',
                    color:parseInt(homeScore) > parseInt(awayScore)?'white': '',
                    letterSpacing:parseInt(homeScore) > parseInt(awayScore)?'1.5px':''
            }}>
                <Link onClick={()=>getStandings(leagueId)} to={"/team/"+ homeId} style={{
                    textDecoration:'none',
                    color: 'inherit'
                }}>{homeName} </Link><ClubLogo onError={()=>SetSrcHome(DefaultClubLogo)}  src={SrcHome}/>

            </NameAndLogo> 
            <section>
                <div>
                <Scores>{homeScore}</Scores>
               {status===''?  time: (status=="Postponed"?"Postponed": "-")}
                <Scores>{awayScore}</Scores>
                </div>
            </section>
            <NameAndLogo style={{
                    fontWeight:parseInt(homeScore) < parseInt(awayScore)?'500':'400',
                    color:parseInt(homeScore) < parseInt(awayScore)?'white': '',
                    letterSpacing:parseInt(homeScore) < parseInt(awayScore)?'1.5px':''
            }}>
            <ClubLogo onError={()=>SetSrcAway(DefaultClubLogo)}  src={SrcAway}/> <Link onClick={()=>getStandings(leagueId)} to={"/team/"+ awayId}  style={{
                    textDecoration:'none',
                    color: 'inherit'
                }}>{awayName} </Link>
            </NameAndLogo> 
            
            </Centered>
            <InfoContainer>
                {isLive === "1" &&
                    <LiveContainer>LIVE</LiveContainer>
                }
                {fav.includes(id)?
                <StarFillLogo onClick={()=>{
                    FavMatchesOptions('delete',id)
                }}/>:
                <StarOutLogo  onClick={()=>{
                    console.log("hello")
                    FavMatchesOptions('add',id)
                }}/>}
            </InfoContainer>   
            </MatchCard>
        </MatchLink>
    );
};

export default Match;