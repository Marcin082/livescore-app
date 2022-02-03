import styled from "styled-components";

export const LineupContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 15px;
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  border-radius: 5px;
  padding: 20px 0;
  margin-top: -30px;
  
`;
export const ClubLineup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  padding: 0 15px;
`;
export const Player = styled.li`
  list-style: none;
  text-align: ${(props) => (props.where === "home" ? "left" : "right")};
  font-size: 17px;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  &:hover {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
`;
