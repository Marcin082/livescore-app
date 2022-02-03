import styled from "styled-components";
import { Pulse } from "../../../../Components/Match/Match.styled";
export const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0 80px 0;
  justify-content: center;
  gap: 80px;
  background: #141e30;
  border-radius: 5px;
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); 
  @media (max-width: 400px) {
    width:100%;
    gap: 20px;
    padding: 25px 0 55px 0;
  }
`;
export const Result = styled.div`
  display: flex;
  font-size: 49px;
  color: ${(props) => (props.live === "1" ? "red" : "white")};
`;
export const Status = styled.div`
  font-size: 22px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const Live = styled.div`
  position: absolute;
  width: 85px;
  padding: 4px 0 7px 0;
  background-color: red;
  color: white;
  font-size: 20px;
  border-radius: 4px;
  text-align: center;
  margin: 0 0 180px 700px;
  animation: ${Pulse} 2s infinite;
  @media (max-width: 400px) {
    padding: 1.5px 0 3px 0;
    margin: 0 0 135px 290px;
    width: 45px;
    font-size: 11px;
  }
`;
export const MatchTime = styled.div`
  font-size: 16px;
  display: flex;
  gap: 10px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const ClubDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-size: 18px;
  color: white;
  font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
  letter-spacing: 1px;
  &:hover {
    color: ${({ theme: { colors } }) => colors.blue} !important;
    font-weight: 600 !important;
  }
  @media (max-width: 400px) {
    flex:1;
  }
`;
export const LiveDetails = styled.span`
  color: red;
  font-size: 22px;
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
export const MatchDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
`;

export const Logo = styled.img`
  width: 130px;
  max-height: 150px;
  @media (max-width: 400px) {
    width: 50px;
    max-height: 70px;
  }
`;
