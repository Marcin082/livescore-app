import React from 'react';
import { ActionCard,Option,Head,Info, DetailsContainer,Action,Assist,Player,Time, GoalCard,Ball, Card, Change, Gate } from './Details.styled';
import useMatches from '../../../../Hooks/UseMatches'
import { useState } from 'react';
import ActionSort from '../../../../Helpers/MatchActions';
const Details = () => {
    const{activeMatch} = useMatches();
    
    let { match_referee:referee,match_stadium:stadium} = activeMatch;
    const actions = ActionSort(activeMatch)

    return (
        <DetailsContainer>
            <ActionCard>
           {actions&&
           actions.map((action)=>{ 
            if(action){ 
                let subPlayer=null
                let inPlayer=null
                const assist = (action.what==="goal"?(Object.values(action)[3]?Object.values(action)[3]:Object.values(action)[8]):"")
                const sub = ()=>{
                    const string = action.what==="sub" ? Object.values(action)[1]:""
                    subPlayer = string.substring(0, string.indexOf("|"))
                    inPlayer = (string.substring( string.indexOf("|"),string.length))
                    inPlayer = inPlayer.substring(1)
                }
                sub()
                const scorer  = (Object.values(action)[1]?Object.values(action)[1]:Object.values(action)[6])
                const faulter = (Object.values(action)[1]?Object.values(action)[1]:Object.values(action)[3])
                
                return (
                    <Action where={action.where}>
                    {action.what==="goal"&&(action.info==="Penalty"?<Gate/>:<Ball src='https://i.pinimg.com/originals/bd/6b/49/bd6b49482d53bbc4e770c8adec28344e.png'/>)}
                    {action.what==="sub"&&<Change/>}
                    {action.what==="card"&&<Card card={action.card}/>}
                    <GoalCard>
                        {assist&&<Assist>({assist})</Assist>}
                        {subPlayer&&<Assist>({subPlayer})</Assist>}

                        <Player>{action.what==="goal"?scorer:(action.what==="card"?faulter:inPlayer)}</Player> 
                    </GoalCard>
                    <Time>{action.time}'</Time>
                    </Action> 

                 ) }
            
           })
           }
           </ActionCard>
                <Head>INFO</Head>
                <Info> 
                    <Option>
                        <span>Reffere</span>
                        {referee}
                    </Option>
                    <Option>
                        <span>Stadium</span> 
                        {stadium}
                    </Option>
                </Info>
        </DetailsContainer>
    );
};

export default Details;