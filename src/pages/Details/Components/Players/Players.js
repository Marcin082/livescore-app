import React from 'react';
import useMatches from '../../../../Hooks/UseMatches'
import { PlayersContainer,PlayerType,PlayerCard,Number,Name } from './Players.styled';
import {Link} from 'react-router-dom'
const Players = ({FromDate,ToDate,setActiveOption}) => {
    const{team} = useMatches();
    let{players:players} = team
    const teamPlayers = []
    const types=[]
    for(let i=0;i<players.length;i++){
        if(!types.includes(players[i].player_type)){
            teamPlayers.push( players.filter((player)=>players[i].player_type === player.player_type))
            types.push(players[i].player_type)
        }
    }
    console.log(teamPlayers)
    return (
        <PlayersContainer>
            {teamPlayers.map((type)=>{                
                return(
                <>
                    <PlayerType>
                    {type[0].player_type}
                    </PlayerType>
                    <Player FromDate={FromDate} ToDate={ToDate} setActiveOption={setActiveOption} players={type}/>
                </>
                
                )
            })}
        </PlayersContainer>
    );
};
const Player = ({FromDate,ToDate,setActiveOption,players}) => {
    const {getPlayer,getMatchesById} = useMatches();
    return (
        <>
            {players.map((player)=>{
                let{player_name:playerName,player_number:playerNumber}= player
                return(
                    <Link style={{
                        textDecoration:'none',
                        color:"inherit"
                    }} to={"/player/"+ player.player_id } onClick={()=>{
                        getPlayer(player.player_id)
                        setActiveOption("Results")}}><PlayerCard>
                    <Number>{playerNumber}</Number>
                    <Name>{playerName}</Name>
                </PlayerCard></Link>
                )
            })}
            
        </>
    );
};
export default Players;