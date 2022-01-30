import React,{useEffect,axios} from 'react';
import { useState } from 'react';
import useMatches from '../../../../Hooks/UseMatches'
import { Head } from '../Details/Details.styled';
import {LineupContainer,ClubLineup,Player,Flex} from './Lineups.styled';
import {Alert} from '../Comments/Comments.styled'
import { Link } from 'react-router-dom';
const Lineups = () => {
    const{activeMatch,getPlayer,player} = useMatches();
   
    console.log(activeMatch)
    console.log(player)

    let { lineup: Lineup} = activeMatch;
    let { home: homeLineup, away: awayLineup} = Lineup;
    let { starting_lineups: startHomeLineup, substitutes:homeSubstitutes,coach:homeCoach} = homeLineup;
    let { starting_lineups: startAwayLineup, substitutes:awaySubstitutes,coach:awayCoach} = awayLineup;


    
    if(Lineup){
        const Sort = (Lineup)=>{
            Lineup.sort((a,b)=>{
            const A = a.lineup_position
            const B = b.lineup_position
            return A - B
            })
        }
        Sort(startAwayLineup)
        Sort(startHomeLineup)
    }

    
   


    return (
        <LineupContainer>
            
            <Head>Lineup</Head>
            {startAwayLineup.length>1?
            <>
            <Flex>
                <ClubLineup>
                    {startHomeLineup.map((player)=>{
                        
                        return  <PLayers where="home" teamPlayer = {player}></PLayers>;
                        }) 
                    }
                </ClubLineup>
                <ClubLineup>
                    {startAwayLineup.map((player)=>{
                        
                        return  <PLayers where="away" teamPlayer = {player}></PLayers>;
                        }) 
                    }
                </ClubLineup>
            </Flex>
            <Head>Substitites</Head>
            <Flex>
                <ClubLineup>
                    {homeSubstitutes.map((player)=>{
                        
                        return  <PLayers where="home" teamPlayer = {player}></PLayers>;
                    }) 
                    }  
                </ClubLineup>
                <ClubLineup>
                    {awaySubstitutes.map((player)=>{
                        
                        return  <PLayers where="away" teamPlayer = {player}></PLayers>;
                    }) 
                    }
                </ClubLineup>
            </Flex>
            <Head>Coaches</Head>
            <Flex>
                <ClubLineup>
                    <PLayers where="home" teamPlayer = {homeCoach[0]}></PLayers>
                </ClubLineup>
                <ClubLineup>
                    <PLayers where="away" teamPlayer = {awayCoach[0]}></PLayers>
                </ClubLineup>
            </Flex>
            </>
            :
            <Alert>This match has no lineup</Alert>
        }</LineupContainer>
    );
};

const PLayers = ({where,teamPlayer}) => {
    const{getPlayer} = useMatches();

    return (
        <>
           <Link style={{
               textDecoration:'none'
           }} to={"/player/"+ teamPlayer.player_key } onClick={()=>getPlayer(teamPlayer.player_key)}><Player  where={where}>{teamPlayer.lineup_player}</Player> </Link>
       </>
    );
};

export default Lineups;