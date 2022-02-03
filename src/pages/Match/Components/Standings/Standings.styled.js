import styled from "styled-components";

export const StandingsContiner = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  margin: 0 auto;
  background-color: ${({ theme: { colors } }) => colors.graphit};
  border-radius: 5px;
  margin-top: -30px;
`;
export const ClubCard = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 0.3pt solid ${({ theme: { colors } }) => colors.grey};
  &.nav {
    font-size: 13px;
    font-family: "Roboto", sans-serif;
    border: none;
    margin-bottom: -10px;
    color: ${({ theme: { colors } }) => colors.smokeWhite};
    &:hover {
      cursor: default;
      background-color: transparent;
      
    }
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.smokeBlue};
  }
  @media (max-width: 400px) {
    font-size: 14px;
    padding: 8px 10px;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 7px;
  
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  flex: 1;
  float: right;
`;
export const Goals = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex: 1;
`;
export const Value = styled.span`
  display: flex;
  text-align: center;
  flex: 1;
  justify-content: center;
  &:last-child {
    color: white;
    font-size: 18px;
    @media (max-width: 400px) {
      font-size: 16px;
      
  }
  }
`;
export const Position = styled.span`
  background-color: ${(props) => props.color};
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  width: 30px;
  line-height: 30px;
  border-radius: 3px;
  font-size: 18px;
  @media (max-width: 400px) {
    width: 25px;
    line-height: 25px;
    font-size: 15px;
  }
`;
export const Name = styled.span`
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  &:hover {
    color: ${({ theme: { colors } }) => colors.blue} !important;
  }
`;
export const Logo = styled.img`
  width: 37px;
  @media (max-width: 400px) {
    width: 30px;
  }
`;
export const Promotion = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  font-size: 15px;
  @media (max-width: 400px) {
    font-size: 13px;
    padding: 6px;
  }
`;
export const Legend = styled.div`
  color: ${({ theme: { colors } }) => colors.smokeWhite};
`;
export const Option = styled.span``;
export const Square = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 3px;
`;
