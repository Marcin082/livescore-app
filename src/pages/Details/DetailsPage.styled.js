import styled from "styled-components";

export const LeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  margin: 50px 0;
  @media (max-width: 430px) {
    margin: 0;
  }
`;
