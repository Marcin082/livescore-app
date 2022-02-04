import styled from "styled-components";
import { BsFillFileFill } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { GiGoalKeeper } from "react-icons/gi";

export const DetailsContainer = styled.div`
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  border-radius: 5px;
  width: 100%;
  margin-top: -30px;
  font-family: ${({ theme: { fonts } }) =>
    fonts.robotoCondensedFont} !important;
  padding: 7px 0;
`;
export const ActionCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  gap: 18px;
  padding: 10px 20px;
  @media (max-width: 430px) {
    padding:5px 5px;
    gap:10px;
    font-size:15px !important;
  }
`;
export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.where === "home" ? "left" : "right")};
  flex-direction: ${(props) =>
    props.where === "home" ? "row-reverse" : "row"};
  gap: 18px;
  font-family: ${({ theme: { fonts } }) =>
    fonts.robotoCondensedFont} !important;
  @media (max-width: 430px) {
    gap:10px;
  }
`;
export const Player = styled.span`
  color: white;
`;
export const Time = styled.span`
  font-size: 14px;
`;

export const GoalCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  flex-direction: ${(props) =>
    props.where === "home" ? "row-reverse" : "row"};
`;
export const Assist = styled.span`
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  font-size: 14px;
`;
export const Card = styled(BsFillFileFill)`
  width: 20px;
  height: 20px;
  color: ${(props) => (props.card === "yellow card" ? "yellow" : "red")};
  @media (max-width: 400px) {
    width: 15px;
    height: 15px;
  }
`;
export const Ball = styled.img`
  width: 30px;
  height: 30px;
  color: black;
  @media (max-width: 430px) {
    width: 25px;
    height: 25px;
  }
`;
export const Option = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 16px;
  span {
    color: #757578;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`;
export const Info = styled.div`
  padding: 5px 10px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Head = styled.div`
  width: 100%;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.grey};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey};
  background-color: black;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
  letter-spacing: 1px;
  font-size: 15px;
  font-weight: 300;
  @media (max-width: 430px) {
    height: 20px;
    font-size: 14px;
  }
`;
export const Gate = styled(GiGoalKeeper)`
  width: 20px;
  height: 20px;
  @media (max-width: 430px) {
    width: 15px;
    height: 15px;
  }
`;
export const Change = styled(FaExchangeAlt)`
  width: 20px;
  height: 20px;
  color: ${({ theme: { colors } }) => colors.blue};
  @media (max-width: 430px) {
    width: 15px;
    height: 15px;
  }
`;
