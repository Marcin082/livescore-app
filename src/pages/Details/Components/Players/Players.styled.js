import styled from "styled-components";
export const PlayersContainer = styled.div`
    color:${({ theme: { colors } }) => colors.smokeWhite};
    font-family: ${({ theme: { fonts } }) => fonts.robotoFont};

`
export const PlayerCard = styled.div`
    display:flex;
    gap:10px;
    padding:2px;
    padding-left:15px;
`
export const PlayerType = styled.div`
    text-align: center;
    background:black;
    padding:2px;
    color:white;
`
export const Name = styled.span`
    padding:3px;
`
export const Number = styled.span`
    padding:3px;
`