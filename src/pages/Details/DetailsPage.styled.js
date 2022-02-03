import styled from "styled-components";

export const LeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  margin: 50px 0;
  @media (max-width: 400px) {
    margin: 0;
  }
`;
