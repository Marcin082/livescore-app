import styled from "styled-components";
export const MatchesContainer = styled.div`
    height:1800px;
    margin:50px 0;
    -webkit-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
    -moz-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
    box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
    display:flex;
 
`

export const Matchescard = styled.div`
    display:flex;
    flex-direction:column;
    background-color:${({ theme: { colors } }) => colors.graphit};
    border-radius: 0 10px 0 0 ;
`







