import styled, { keyframes } from "styled-components";
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import {Link} from 'react-router-dom'
export const MatchCard = styled.div`
    background-color: ${({ theme: { colors } }) => colors.grey};
    height:50px;
    align-items: center;
    width:95%;
    margin-top:6px;
    border-radius: 1px;
    font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
    -webkit-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    -moz-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
    margin:0 auto;
    &:hover{
        background-color:#c1c3c7 !important;
        cursor:pointer;
    }
    
`
export const StarFillLogo = styled(AiFillStar)`
    margin-top:-25.5px;
    width:43px;
    height:33px;
    color: ${({ theme: { colors } }) => colors.blue};
    z-index:2;
    &:hover{
        cursor: pointer;
        transform:scale(1.2);
    }
`
export const StarOutLogo = styled(AiOutlineStar)`
    margin-top:-25.5px;
    width:43px;
    height:33px;
    color: ${({ theme: { colors } }) => colors.blue};
    z-index:2;
    &:hover{
        transform:scale(1.2);
        cursor: pointer;
    }
`
export const Centered = styled.div`
    transform:translateY(7.5px);
    width:100%;
    text-align: center;
    display:flex;
    gap:30px;
    align-items: center;
    margin-top: 6px;
    
    
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
        gap:2px;
    }
    span{
        position:absolute;
        transform:translateY(-12px);
        color: ${({ theme: { colors } }) => colors.blue};
        font-weight:700;
        font-size:12px;
        background-color:white;
        padding:0 2px;
    }
    
`
export const NameAndLogo = styled.div`
   display: flex;
        flex:6; 
        gap:10px;
        align-items:center;
        color:${({ theme: { colors } }) => colors.smokeWhite};
        padding: 0;
        margin:0;
        ${MatchCard}:hover &{
        color: ${({ theme: { colors } }) => colors.graphit};
        }
    &:first-child{
    display: flex;
    justify-content: flex-end;
    }
    &:hover{
        color: ${({ theme: { colors } }) => colors.blue} !important;
        font-weight:600 !important;
    }
`
   

export const Date  = styled.span`
    position:absolute;
    font-size:15px;
    margin-top:15px;
    margin-left:10px;
    margin-right:auto;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    ${MatchCard}:hover &{
        color: black;
    }
    
`  
export const Scores = styled.p`
   font-size:24px;
   flex:2;
   margin: 0;
   padding: 0; 
`
export const ClubLogo = styled.img`
    width:35px;
    height:35px;
    object-fit: cover;
    padding:0 5px;
`
export const Line = styled.div`
    position:absolute;
    width:6px;
    height:50px;
    border-radius: 1px 0px 0px 1px;
    background-color:${({ theme: { colors } }) => colors.blue};
    span{
        font-family:${({ theme: { fonts } }) => fonts.robotoCondensedFont};
        width:130px !important;
        font-size: 20px;
        position:absolute;
        font-weight:500;
        transform: translate(15px,14.3px);
        color:${({ theme: { colors } }) => colors.blue};
    }
    
`
export const Pulse = keyframes`
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
export const InfoContainer = styled.div`
    float:right;
    display:flex;
    gap:5px;
    z-index:2;
`
export const LiveContainer = styled.div`
    width:55px;
    height:30px;
    background-color:${({ theme: { colors } }) => colors.blue};
    color:white;
    border-radius: 4px;
    text-align:center;
    vertical-align: middle;
    line-height: 30px;     
    margin:-25px 0 0 0;
    animation: ${Pulse} 2s infinite ;
    
`
export const MatchLink = styled(Link)`
   text-decoration: none;
z-index:1
    
`


