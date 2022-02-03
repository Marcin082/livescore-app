import styled, { keyframes } from "styled-components";
export const Pulse = keyframes`
  0% {
    opacity:0.6;
  }
  50% {
    opacity:1.2;
  }
  100% {
    opacity: 0.6;
  }
`;
export const LoadingContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.Gap}px;
  background-color: ${({ theme: { colors } }) => colors.graphit} ;
  
`;
export const LoadFragment = styled.div`
  @media (max-width: 400px) {
     background-color: ${({ theme: { colors } }) => colors.graphit} ;
    }
`;

export const LoadMatch = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grey};
  height: 50px;
  align-items: center;
  width: 95%;
  display: flex;
  margin-top: 16px;
  justify-content: center;
  gap: 25px;
  border-radius: 1px;
  font-family: ${({ theme: { fonts } }) => fonts.robotoCondensedFont};
  -webkit-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
  -moz-box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
  box-shadow: 0px 5px 10px 4px rgba(8, 10, 21, 1);
  margin: 0 auto;
  @media (max-width: 400px) {
    height: 35px;
    }
`;
export const Name = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  div {
    height: 16px;
    align-items: center;
    width: 170px;
    border-radius: 1px;
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    @media (max-width: 400px) {
      width:80px;
      height: 10px;
    }
  }
  span {
    height: 25px;
    width: 25px;
    background-color: ${({ theme: { colors } }) => colors.lightGrey};
    @media (max-width: 400px) {
      height: 16px;
      width: 16px;
    }
  }
  animation: ${Pulse} 2s infinite;
`;

export const Score = styled.div`
  height: 25px;
  width: 50px;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  animation: ${Pulse} 2s infinite;
  @media (max-width: 400px) {
      height: 16px;
      width: 26px;
    }
`;
