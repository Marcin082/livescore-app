import React, { useState } from "react";
import Calendar from "./Components/Calendar/Calendar";
import { MatchesContainer, Matchescard } from "./Matches.styled";
import Navigation from "./Components/Navigation/Navigation";
import MatchList from "./Components/Matchlist/MatchList";
import useMatches from "../../Hooks/UseMatches";
import { CalendarFunctions } from "../../Helpers/CalendarFunctions";
import Leagues from "./Components/Leagues/Leagues";
import Input from "./Components/Input/Input";
import Loading from "../../Components/LoadingPage/Loading";
import LoadingMatches from "../../Components/LoadingMatches/LoadingMatches";

const Matches = () => {
  const today = new Date();
  const firstDay = new Date();
  const [activeDay, setActiveDay] = useState(today);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showResults, setShowResults] = useState(true);
  const dateformat =
    activeDay.getFullYear() +
    "-" +
    (activeDay.getMonth() + 1) +
    "-" +
    activeDay.getDate();
  const { getAllMatches, isLoading, getLeagues, getLeagueLogo } = useMatches();
  console.log(today);
  console.log(activeDay);

  React.useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    console.log(screenWidth);
    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    getAllMatches(dateformat);
    getLeagueLogo();
  }, [activeDay]);

  const dates = CalendarFunctions(activeDay, firstDay, screenWidth);

  const OnClickHandler = (day) => {
    if (!isLoading) {
      setActiveDay(day);
    }
  };
  console.log(activeDay);

  return (
    <>
      <MatchesContainer onClick={() => setShowResults(false)}>
        {screenWidth > 800 && <Leagues dateformat={dateformat} />}
        <Matchescard>
          <Input showResults={showResults} setShowResults={setShowResults} />
          <Calendar
            dateformat={dateformat}
            dates={dates}
            OnClickHandler={OnClickHandler}
            activeDay={activeDay}
          />
          <Navigation dateformat={dateformat} />
          {isLoading ? <LoadingMatches Gap="6" /> : <MatchList />}
        </Matchescard>
      </MatchesContainer>
    </>
  );
};

export default Matches;
