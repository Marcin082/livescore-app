import styled from "styled-components";

export const ButtonNav = styled.div`
  background-color: ${({ theme: { colors } }) => colors.graphit};
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  height: 40px;
  display: flex;
  gap:10px;
  border: none;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey};
  padding-left: 20px;
`;

export const Center = styled.div`
  background-color: ${({ theme: { colors } }) => colors.graphit};
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  outline: none;
  
  background-color: ${(props) =>
    props.active === "true"
      ? ({ theme: { colors } }) => colors.smokeBlue
      : ({ theme: { colors } }) => colors.blue};
  border: none;
  border-bottom: 2px solid transparent !important;
  font-size: 13px;
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  font-weight: 600;
  padding: 0 15px;
  letter-spacing: 0.9px;
  height: 70%;
  color: ${(props) =>
    props.active === "true"
      ? ({ theme: { colors } }) => colors.smokeWhite
      : ({ theme: { colors } }) => colors.graphit};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.smokeBlue};
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.smokeWhite};
  }
  @media (max-width: 430px) {
    font-size: 11px;
    letter-spacing:1.3px;
    padding: 0 10px;
    height: 60%;
  }
`;
