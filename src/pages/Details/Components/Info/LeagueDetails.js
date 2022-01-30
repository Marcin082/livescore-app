import React, { useState } from 'react';
import UseMatches from '../../../../Hooks/UseMatches'
import { LeagueDetailsContainer,LeagueLogo,Name,Country } from './LeagueDetails.styled';

const Info = ({ID}) => {
    const{league,team,player} = UseMatches()
   
    let SRC =null
    let NAME =null
    let COUNTRY =null
    console.log(player)

    if(ID){
        if(team){
            SRC =team.team_badge
            NAME = team.team_name
            COUNTRY = ""
        }
        
    }
    if(player){
        SRC =player.player_image
        NAME = player.player_name
        COUNTRY = ""    
    }
    else if(league){
        if(league.length>0){
            SRC =league[0].league_logo
         NAME = league[0].league_name
         COUNTRY = league[0].country_name
        }
        
    }
    console.log(SRC,NAME,COUNTRY)
    return (
        <LeagueDetailsContainer>
            
            <>
            {SRC && <LeagueLogo src={SRC}/>}
            <div>
               <Name>{NAME}</Name> 
               <Country>{COUNTRY}</Country>
            </div>
            </>
           
        </LeagueDetailsContainer>
    );
};

export default Info;