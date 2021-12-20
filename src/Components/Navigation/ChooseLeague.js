import React, { useState } from 'react';
import { LeagueFilter,LeaguesBox, League, CountryName,LeagueContainer, CloseIcon } from './ChooseLeague.styled';
import useMatches from '../../Hooks/UseMatches';
import { AddTopLeagues } from '../../Helpers/MatchesSort';
const ChooseLeague = ({dateformat,setShowLeague,FilterByLeague}) => {
    const{leagues} = useMatches();
    const countryLeagues= AddTopLeagues(leagues)
    const sortedLeagues = countryLeagues.slice(7)
    return (
        <LeagueFilter >
            <CloseIcon onClick={()=>setShowLeague(false)}/>
           {sortedLeagues.map((country)=>{
           return (
               <>
           <CountryName>{country[0].country_name}</CountryName>
           <LeaguesCard dateformat={dateformat} FilterByLeague={FilterByLeague} country={country}/>
           </>
           )
           })}
            
        </LeagueFilter>
    );
};
const LeaguesCard = ({dateformat,FilterByLeague,country}) => {
    
   
    return (
        <LeaguesBox>
          {country.map((league)=>{
            return(
                <LeagueContainer onClick={()=>FilterByLeague(league.league_id,dateformat)}>
                <League >{league.league_name}</League>
                </LeagueContainer>
            ) 
          })}

        </LeaguesBox>
    );
};

export default ChooseLeague;