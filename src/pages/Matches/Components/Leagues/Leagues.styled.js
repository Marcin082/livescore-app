import styled from "styled-components";
import { IoClose } from 'react-icons/io5';
import { IoIosFootball } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';

export const LeagueNav = styled.div`
    background-color:#1f2024;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    width:200px;
    height:2000px;
    padding:5px 0px 15px 0px;
    display: flex;
    flex-direction: column;
    border:none;
    align-items:left;
    border-radius:10px 0 0 0 ;
`


export const League = styled.div`
    
    color:${({ theme: { colors } }) => colors.smokeWhite};
    margin: 0 auto;
    display:flex;
    gap:10px;
    align-items:center;
    border:none;
    font-size:15px;
    font-weight: 300;
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    width:100%;
    padding:7px 10px 7px 15px;
    letter-spacing:0.7px;
    white-space: nowrap;
    &.choose{
        color:white;
        font-size:18px;
        &:hover{
            background: none;
        }
    }
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:white;
    }
    &:focus,:active,:visited{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
        color:white;
    }
    
`
export const ChooseContainer = styled.div`
    display:flex;
    justify-content: space-between;
    &:hover{
        background-color:${({ theme: { colors } }) => colors.smokeBlue};
        cursor:pointer;
    }
`
export const Up = styled(IoMdArrowDropup)`
    width:41px;
    height:40px;
    color:${({ theme: { colors } }) => colors.smokeWhite};
` 
export const Down = styled(IoMdArrowDropdown)`
    width:41px;
    height:40px;
    color:${({ theme: { colors } }) => colors.smokeWhite};
` 
export const LeagueFilter = styled.div`
    padding: 0 10px;
    background-color: #1e2024;
    text-align:left;
    color:#c1c3c7;
    font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
    border-radius:4px;
` 
export const LeaguesBox = styled.div`
    display:flex;
    flex-direction: column;
    cursor:pointer;
   
` 
export const Logo = styled.div`
    width:140px;
    margin:0 auto;
    display:flex;
    align-items:center;
    margin-top:20px;
    margin-bottom:20px;
    span{
        color:white;
        font-family: 'Oswald', sans-serif;
        font-size:27px;
        letter-spacing:1px;
    }
`
export const Ball = styled(IoIosFootball)`
    width:41px;
    height:40px;
    color:${({ theme: { colors } }) => colors.blue};
    font-weight: normal;
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
export const LeagueLogo = styled.img`
    width:35px;
    height:20px;
` 
export const LeagueName = styled.li`
    list-style:none;
    font-size:15px;
    padding: 2.5px 15px;
    
    
` 
