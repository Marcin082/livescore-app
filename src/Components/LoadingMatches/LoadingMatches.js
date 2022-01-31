import React from 'react';
import {LoadingContainer, LoadMatch, Name ,Score} from './LoadingMatches.styled';
import useMatches from '../../Hooks/UseMatches';


const LoadingMatches = ({Gap})=> {
    const times = Array.from(Array(20).keys())
    
    return (
        <LoadingContainer Gap={Gap}>
        {times.map(()=>{
            return (<LoadMatch> 
            <Name>
                <div></div>
                <span></span>
            </Name> 
            <Score></Score>
            <Name>
                <span></span>
                <div></div>
                
            </Name> 
        </LoadMatch>)
        })}
            
        
        </LoadingContainer>
    );
};


export default LoadingMatches;