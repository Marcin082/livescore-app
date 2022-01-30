import React from 'react';
import useMatches from '../../../../Hooks/UseMatches'
import { PlayersContainer,PlayerType,PlayerCard,Number,Name } from './Players.styled';

const Players = () => {
    const{team} = useMatches();
    let{coaches:coaches,players:players} = team
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
                    <Player players={type}/>
                </>
                
                )
            })}
        </PlayersContainer>
    );
};
const Player = ({players}) => {
    return (
        <>
            {players.map((player)=>{
                let{player_name:playerName,player_number:playerNumber}= player

                return(
                <PlayerCard>
                    <Number>{playerNumber}</Number>
                    <Name>{playerName}</Name>
                </PlayerCard>
                )
            })}
            
        </>
    );
};
export default Players;