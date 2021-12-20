import React from 'react';
import { MatchListContainer,CenterContainer,LeagueDetails,CountryLogo,RightArrow, MatchesContainer } from './MatchList.styled';
import Match from '../Match/Match';
import { SortByLeague } from '../../Helpers/MatchesSort';
import useMatches from '../../Hooks/UseMatches'
const MatchList = () => {
    const{matches} = useMatches();
    
    let LeaguesMatches = SortByLeague(matches)

    
    return (
        <MatchListContainer>
            <CenterContainer>
        {
            
            
            LeaguesMatches.map((leagueMatches,index)=>{
            
            return (
            <>
            <LeagueDetails>
                <section>
                    <div>
                        <CountryLogo src={leagueMatches[0].country_logo?leagueMatches[0].country_logo:leagueMatches[0].league_logo}/>
                    </div>
                    <div>
                        {leagueMatches[0].league_name}
                        <span>{leagueMatches[0].country_name}</span>
                    </div>
                    
                </section>
                <section>
                    <RightArrow/>
                </section>
            </LeagueDetails>
            <LeagueMatches key={index} leagueMatches={leagueMatches}/>
            </>
        )})
        }
        </CenterContainer>
        </MatchListContainer>
       
    );
};
const LeagueMatches = ({leagueMatches}) => {
    return (
            <>
                {leagueMatches.map((match)=>{
                    return <Match key={match.match_id} match={match} leagueMatches={leagueMatches}/>
                })}
           </>
    );
};
export default MatchList;