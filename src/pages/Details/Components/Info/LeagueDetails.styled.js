import styled from "styled-components";
export const LeagueDetailsContainer = styled.div`
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  );
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  );
`;
export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  padding:50px 0 10px 30px;
  gap:20px;
  div {
    display: flex;
    flex-direction: column;
  }
`;
export const LeagueLogo = styled.img`
  width: 150px;
  background-color: white;
  padding: 3px;
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 100px;
  }
`;
export const Name = styled.h1`
  font-size: 40px;
  font-family: "Oswald", sans-serif;
  color: white;
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
export const Country = styled.span`
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  color: white;
  transform: translatey(-30px);
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
