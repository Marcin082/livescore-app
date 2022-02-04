import styled from "styled-components";

export const StatsContiner = styled.div`
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
export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  padding: 0 30px;
  @media (max-width: 430px) {
    font-size:13px;
  }
`;
export const Numbers = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  span {
    color: white;
  }
`;
export const Type = styled.span`
  color: white;
  font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
  font-weight: 300 !important;
  font-size: 15px;
`;
export const Bars = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  
`;
export const FirstBar = styled.span`
  width: ${(props) => props.HomePercentages}%;
  height: 20px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  border-radius: 3px 0 0 3px;
  @media (max-width: 430px) {
    height: 13px;
  }
`;
export const SecondBar = styled.span`
  background-color: ${({ theme: { colors } }) => colors.smokeWhite};
  width: ${(props) => props.AwayPercentages}%;
  height: 20px;
  border-radius: 0 3px 3px 0;
  @media (max-width: 430px) {
    height: 13px;
  }
`;
