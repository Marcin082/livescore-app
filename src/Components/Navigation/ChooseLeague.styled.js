import styled from "styled-components";
import { IoClose } from 'react-icons/io5';
export const LeagueFilter = styled.div`
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    float:right;
    position:absolute;
    padding: 0 5px ;
    width:370px;
    height:500px;;
    background-color: #1e2024;
    z-index:3;
    overflow-y: scroll;
    text-align:left;
    color:#c1c3c7;
    transform:translate(220px,80px);
    font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
    border: 1px solid black;
    border-radius:4px;
` 
export const CloseIcon = styled(IoClose)`
    height:45px !important;
    width:39px !important;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    cursor:pointer;
    position: fixed;
    transform: translateX(310px);
`
export const LeaguesBox = styled.div`
    display:flex;
    flex-direction: column;
    cursor:pointer;
   
` 
export const LeagueContainer = styled.div`
    display:flex;
    align-items:center;
    span{
        width:20px;
        height:20px;
        text-align: center;
        background-color:${({ theme: { colors } }) => colors.blue};
        border-radius:3px;
    }
    &:hover{
        background-color:${({ theme: { colors } }) => colors.grey};
        border-radius:4px;
    }
`
export const CountryName = styled.p`
    margin: 0;
    padding: 10px 0;
    font-size:17px;
    font-weight: 600;
    letter-spacing: 1px;
     font-family: ${({ theme: { fonts } }) => fonts.robotoFont} !important;
` 

export const League = styled.li`
    list-style:none;
    font-size:15px;
    padding: 2.5px 15px;
    
    
` 
