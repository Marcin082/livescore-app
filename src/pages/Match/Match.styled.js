import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const LeagueContainer = styled.div`
  height: 1800px;
  border-radius: 5px;
  margin-top: 20px;
  position: relative;
  @media (max-width: 400px) {
    margin:0;
    height:inherit;
  }
`;
export const BackArrow = styled(BiArrowBack)`
  color: white;
  position: absolute;
  transform: translate(30px, 10px);
  height: 30px;
  width: 22px;
  padding: 2px 6px 2px 6px;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  border-radius: 7px;
  opacity: 0.2;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
