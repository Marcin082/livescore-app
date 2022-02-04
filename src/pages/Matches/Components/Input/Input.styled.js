import styled from "styled-components";
export const Input = styled.input`
  color: #1e2024;
  padding-left: 15px;
  font-size: 16px;
  height: 35px;
  outline: none;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.grey};
  margin-left: 10px;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  width:550px;
  @media (max-width: 900px) and (min-width:431px) {
    width:400px;
    
  }
  @media (max-width: 430px) {
    height: 27px;
    font-size: 12px;
    margin:0;
  }
`;
export const InputCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  @media (max-width: 430px) {
    padding: 5px;
    
  }
`;
export const Results = styled.div`
  position: absolute;
  width:567px;
  height: 335px;
  margin: 40px 106px 0 0;
  overflow-y: scroll;
  background-color: ${({ theme: { colors } }) => colors.grey};
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  z-index: 5;
  @media (max-width: 900px) and (min-width:431px) {
    width:417.5px;
    
  }
  @media (max-width: 430px) {
    width:100%;
    transform:translate(54px,0px);
    height:100%;
  }
`;
export const Option = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme: { colors } }) => colors.smokeWhite};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.smokeBlue};
    cursor: pointer;
  }
  @media (max-width: 430px) {
    height: 30px;
    font-size:13px;
  }
`;
export const Logo = styled.img`
  max-width: 40px;
  @media (max-width: 430px) {
    max-width: 30px;
  }
`;
export const Name = styled.span`
  font-family: ${({ theme: { fonts } }) => fonts.asapCondensedFont};
  padding-left: 10px;
`;


export const Search = styled.button`
  padding: 5px 15px;
  outline: none;
  border: none;
  width:110px;
  font-family: ${({ theme: { fonts } }) => fonts.robotoFont};
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 15px;
  height: 36px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.dark};
  margin-right:5px;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.smokeBlue};
    color: ${({ theme: { colors } }) => colors.smokeWhite};
  }
  @media (max-width: 430px) {
    display:none;
  }
`;
export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
  width:100%;
  background-color: ${({ theme: { colors } }) => colors.dark};
  border-radius: 0 10px 0 0;
  @media (max-width: 430px) {
    padding: 0 5px;
    width: 97%;
  }
`;
