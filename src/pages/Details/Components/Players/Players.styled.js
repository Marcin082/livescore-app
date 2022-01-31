import styled from "styled-components";
export const PlayersContainer = styled.div`
    color:${({ theme: { colors } }) => colors.smokeWhite};
    font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
    padding:20px 0;
`
export const PlayerCard = styled.div`
    display:flex;
    gap:10px;
    padding:2px;
    padding-left:15px;
    &:hover{
        color:${({ theme: { colors } }) => colors.blue};
    }
`
export const PlayerType = styled.div`
    width:100%;
    height:26px;
    display: flex;
    justify-content: center;
    align-items:center;
    border-top:1px solid ${({ theme: { colors } }) => colors.grey};
    border-bottom:1px solid ${({ theme: { colors } }) => colors.grey};
    background-color:black;
    color:${({ theme: { colors } }) => colors.smokeWhite};
    font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
    letter-spacing:1px;
    font-size:15px;
    font-weight: 300;
`
export const Name = styled.span`
    padding:3px;
`
export const Number = styled.span`
    padding:3px;
`
