import styled, { keyframes } from "styled-components";
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

export const MatchCard = styled.div`
    background-color: #393b40;
    height:50px;
    align-items: center;
    width:100%;
    margin-top:6px;
    border-radius: 7px;
    font-family: 'Roboto Condensed', sans-serif;
    -webkit-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    -moz-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    &:hover{
        background-color:#2e8bff !important;
        cursor:pointer;
    }
    
`
export const StarLogo = styled(AiFillStar)`
   
    float: right;
    margin-top:-24px;
    position:absolute;
    width:40px;
    height:30px;
`
export const Centered = styled.div`
    transform:translateY(7.5px);
    width:100%;
    text-align: center;
    display:flex;
    gap:30px;
    align-items: center;
    margin-top: 6px;
    article:first-child{
        display: flex;
        justify-content: flex-end;
        
    }
    article{
        display: flex;
        flex:6; 
        gap:10px;
        align-items:center;
        color:#c1c3c7;
        padding: 0;
        margin:0;
        ${MatchCard}:hover &{
        color: #1e2024;
        }
    }
    section{
        display: flex;
        align-items:center;
        flex-direction:column;
        flex:1;
        color:white;
        ${MatchCard}:hover &{
        color: black;
        }
        
    }
    div{
        display: flex;
        align-items:center;
    }
    span{
        position:absolute;
        transform:translateY(-12px);
        color: #1e2024;
        font-weight:700;
        font-size:12px;
        background-color:white;
        padding:0 2px;
    }
    
`
export const Scores = styled.p`
   font-size:22px;
   flex:2;
   margin: 0;
   padding: 0; 
`
export const ClubLogo = styled.img`
    width:35px;
    height:35px;
    object-fit: cover;
`
export const Line = styled.div`
    position:absolute;
    width:6px;
    height:50px;
    background-color:#2e8bff;
    ${MatchCard}:hover &{
        background-color:white !important;
    }
    span{
        width:130px !important;
        font-size: 20px;
        position:absolute;
        transform: translate(15px,14.3px);
        color:#2e8bff;
        ${MatchCard}:hover &{
        color:white;
        }
    }
    
`
const Pulse = keyframes`
  0% {
    opacity:1.7;
    transform: scale(1);
  }
  50% {
    opacity: 1.2;
    transform: scale(1.1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1);
  }
`
export const LiveContainer = styled.div`
    position:absolute;
    width:55px;
    height:30px;
    right:25px;
    background-color:#2e8bff;
    color:white;
    border-radius: 4px;
    text-align:center;
    vertical-align: middle;
    line-height: 30px;     
    margin:-25px 50px 0 0;
    ${MatchCard}:hover &{
        color:#2e8bff;
        background-color:white;

    }
    animation: ${Pulse} 2s infinite ;
    
`



