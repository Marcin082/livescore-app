import styled from "styled-components";
import { IoIosFootball } from "react-icons/io";
export const MatchesContainer = styled.div`
  margin: 50px 0;
  -webkit-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
  -moz-box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
  box-shadow: 0px 2px 3px 1px rgba(30, 32, 36, 1);
  display: flex;
  @media (max-width: 430px) {
    height: 20px;
    margin: 0;
  }
`;

export const Matchescard = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  border-radius: 0 10px 0 0;
`;
export const Logo = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  padding:3px 0;
  span {
    color: white;
    font-family: "Oswald", sans-serif;
    font-size: 27px;
    letter-spacing: 1px;
  }
`;
export const Ball = styled(IoIosFootball)`
  width: 41px;
  height: 40px;
  color: ${({ theme: { colors } }) => colors.blue};
  font-weight: normal;
`;
