import React, { useState } from 'react';
import UseMatches from '../../../../Hooks/UseMatches'
import {Logo,Ball, LeagueNav,League,LeagueLogo,LeagueFilter,ChooseContainer,LeaguesBox, LeagueName, CountryName,LeagueContainer, CloseIcon, Up, Down } from './Leagues.styled';
import { AddTopLeagues } from '../../../../Helpers/MatchesSort';
const Leagues = ({dateformat}) => {
    const[showLeague,setShowLeague] = useState(false)
    const{getLeagues,FilterByLeague,leagues} = UseMatches()
    const UefaLogo = "https://i.pinimg.com/originals/ae/8b/9c/ae8b9c772901208d18c752f356574dc7.png"
    const EurLogo = "https://www.crwflags.com/fotw/images/i/int-uefa@13.gif"
    console.log(leagues)
    const SearchLogo=(id)=>{
        if(leagues){
            const league = leagues.filter(league=>league.league_id===id)
            if(league[0]){
                return league[0].country_logo
            }
            
        }
    }

    return (
    <>
        <LeagueNav >
            <Logo>
                <Ball/>
                <span>
                LiveScore
                </span>
            </Logo>
            <League onClick={()=>FilterByLeague("152",dateformat)}><LeagueLogo src={SearchLogo("152")}/>Premier League</League>
            <League onClick={()=>FilterByLeague("302",dateformat)}><LeagueLogo src={SearchLogo("302")}/>La Liga</League>
            <League onClick={()=>FilterByLeague("207",dateformat)}><LeagueLogo src={SearchLogo("207")}/>Serie A</League>
            <League onClick={()=>FilterByLeague("175",dateformat)}><LeagueLogo src={SearchLogo("175")}/>Bundesliga</League>
            <League onClick={()=>FilterByLeague("168",dateformat)}><LeagueLogo src={SearchLogo("168")}/>League 1</League>
            <League onClick={()=>FilterByLeague("3",dateformat)}><LeagueLogo src={EurLogo}/>Champions League</League>
            <League onClick={()=>FilterByLeague("4",dateformat)}><LeagueLogo src={EurLogo}/>Europa League</League>
            <League onClick={()=>FilterByLeague("683",dateformat)}><LeagueLogo src={EurLogo}/>Conference League</League>
            <League onClick={()=>FilterByLeague("633",dateformat)}><LeagueLogo src={UefaLogo}/>Nations League</League>
            <ChooseContainer onClick={()=>setShowLeague(!showLeague)}>
                <League className="choose" onClick={()=> {
                
                getLeagues()
                }}>Choose</League> 
            {showLeague?<Down/>:<Up/>}
            </ChooseContainer>
            {showLeague&&<ChooseLeague dateformat={dateformat} setShowLeague={setShowLeague} FilterByLeague={FilterByLeague}/>}
        </LeagueNav>
    </>
    );
};

const ChooseLeague = ({dateformat,setShowLeague,FilterByLeague}) => {
    const {leagues} = UseMatches();
    const countryLeagues= AddTopLeagues(leagues)
    const sortedLeagues = countryLeagues.slice(7)
    return (
        <LeagueFilter >
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
            let { league_name: name, league_id: id } = league;  
            return(
                <LeagueContainer onClick={()=>FilterByLeague(id,dateformat)}>
                <LeagueName >{name}</LeagueName>
                </LeagueContainer>
            ) 
          })}

        </LeaguesBox>
    );
};

export default Leagues;