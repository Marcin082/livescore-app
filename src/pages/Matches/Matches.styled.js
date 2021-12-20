import styled from "styled-components";
export const MatchesContainer = styled.div`
    height:1800px;
    background-color:  ${({ theme: { colors } }) => colors.graphit};
    -webkit-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
    -moz-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
    box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
`
export const LoadingContainer = styled.div`
    padding:30px 47%;
    background-color:  ${({ theme: { colors } }) => colors.graphit};
`







