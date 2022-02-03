import styled from "styled-components";
export const NavCard = styled.div`
  display: flex;
  transform: translatey(-42px);
  justify-content: space-around;
  text-align: center;
  @media (max-width: 400px) {
    transform: translatey(-28px);
    margin-bottom: 10px;
  }
`;

export const Option = styled.button`
  padding: 9px 10px;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
  color: ${(props) =>
    props.active === "true"
      ? "white"
      : ({ theme: { colors } }) => colors.smokeWhite};
  border-bottom: ${(props) => (props.active === "true" ? "4px solid" : "none")};
  border-color: ${(props) =>
    props.active === "true"
      ? ({ theme: { colors } }) => colors.blue + "!important"
      : "none"};
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  letter-spacing: 1px;
  border-bottom: 4px solid transparent;
  margin: auto;
  cursor: pointer;
  &:hover {
    color: white;
  }
  @media (max-width: 400px) {
    font-size: 13px;
    font-weight: 300;
    border-bottom: 2px solid transparent;
    padding: 5px 10px;
  }
`;
