import styled from "styled-components";
export const ResultsContainer = styled.div`
    padding:10px 0;
`
export const Round = styled.span`
    color:${({ theme: { colors } }) => colors.smokeWhite};
    font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
    text-align:center;
`
export const RoundCard = styled.div`
    display:flex;
    flex-direction: column;
    margin-bottom:15px;
`