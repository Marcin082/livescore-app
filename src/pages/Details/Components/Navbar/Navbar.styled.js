import styled from "styled-components";
export const Nav = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  background: -webkit-linear-gradient(to right, #243b55, #141e30);
  background: linear-gradient(to right, #243b55, #141e30);
`;
export const Button = styled.button`
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
    font-size: 14px;
    width: 100%;
    border-bottom: 2px solid transparent;
  }
`;
