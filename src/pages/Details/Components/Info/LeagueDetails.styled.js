import styled from "styled-components";
export const LeagueDetailsContainer = styled.div`
    display:flex;
    justify-content:left;
    align-items: flex-start;
    height:150px;
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    gap:25px;
    padding:25px 90px;   
    div{
        display: flex;
        flex-direction: column;
        justify-content: left;
        
    }
`
export const LeagueLogo = styled.img`
    width:150px;
    background-color:white;
    padding:3px;
    border-radius: 10px;
`
export const Name = styled.h1`
    font-size:40px;
    font-family: 'Oswald', sans-serif;
    color:white;

`
export const Country = styled.span`
    font-size:20px;
    font-family: 'Oswald', sans-serif;
    color:white;
    transform:translatey(-30px);
`
