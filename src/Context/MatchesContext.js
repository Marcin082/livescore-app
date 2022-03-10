import { useState, createContext } from "react";
import axios from "axios";

const MatchesContext = createContext({
  isLoading: false,
  getAllMatches: () => {},
  matches: [],
  leagues: [],
  player: null,
});

export const MatchesContextProvider = (props) => {
  const [matches, setMatches] = useState([]);
  const [leagueMatches, setLeagueMatches] = useState([]);
  const [comments, setComments] = useState(null);
  const [team, setTeam] = useState(null);
  const [league, setLeague] = useState(null);
  const [country, setCountry] = useState(null);
  const [player, setPlayer] = useState(null);
  const [logos, setLogos] = useState(null);
  const [h2h, setH2H] = useState(null);
  const [standings, setStandings] = useState(null);
  const [activeMatch, setActiveMatch] = useState(0);
  const [leagues, setLeagues] = useState([]);
  const [fav, setFav] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const APIKEY =
    "cc64fcc0409c449e63724c93f3add41d8267501a77701dbae6a34f443bd86bdf";

  const getAllMatches = async (date) => {
    console.log("hello");
    setIsLoading(true);

    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_events&from=${date}&to=${date}&APIkey=${APIKEY}`
    );
    const data = res.data;
    console.log(data);
    setMatches(data);
    setIsLoading(false);
  };
  const getMatchesById = async (id, FromDate, ToDate, action) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_events&from=${FromDate}&to=${ToDate}&${action}=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    console.log(data);
    setLeagueMatches(data);
    setIsLoading(false);
  };
  const getLiveMatches = async (date) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_events&match_live=1&from=${date}&to=${date}&APIkey=${APIKEY}`
    );
    const data = res.data;
    setMatches(data);
    setIsLoading(false);
  };

  const getFavMatches = () => {
    setIsLoading(true);
    const newData = matches.filter((match) => fav.includes(match.match_id));
    setMatches(newData);
    setIsLoading(false);
  };
  const getMatch = async (id) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_events&match_id=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    const match = data[0];
    setActiveMatch(match);
    setIsLoading(false);
  };
  const getH2H = async (firstId, secondId) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${firstId}&secondTeamId=${secondId}&APIkey=${APIKEY}`
    );
    const data = res.data;
    setH2H(data);
    setIsLoading(false);
  };

  const getStandings = async (id) => {
    console.log("reerefr");
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://apiv3.apifootball.com/?action=get_standings&league_id=${id}&APIkey=${APIKEY}`
      );
      const data = res.data;
      setStandings(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getTeam = async (id) => {
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_teams&team_id=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    const team = data[0];
    console.log(team);
    setTeam(team);
  };
  const getCountry = async (id) => {
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_countries&APIkey=${APIKEY}`
    );
    const data = res.data;
    const country = data.filter((country) => country.country_name === id);
    setCountry(country);
  };
  const getPlayer = async (id) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_players&player_id=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    console.log(data);
    if (data[1]) {
      setPlayer(data[1]);
    } else {
      setPlayer(data[0]);
    }
    setIsLoading(false);
  };
  const getComments = async (id) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_live_odds_commnets&match_id=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    setComments(data);
    setIsLoading(false);
  };
  const getLeagues = async () => {
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_leagues&APIkey=${APIKEY}`
    );
    const data = res.data;
    setLeagues(data);
  };
  const getLeague = async (id) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_leagues&league_id=${id}&APIkey=${APIKEY}`
    );
    const data = res.data;
    const league = data.filter((league) => league.league_id === id);
    setLeague(league);
    setIsLoading(false);
  };
  const FavMatchesOptions = (option, match) => {
    let favourites = [...fav];
    console.log("hello");
    if (option === "add") {
      favourites.push(match);
    } else {
      const index = favourites.indexOf(match);
      favourites.splice(index, 1);
    }
    setFav(favourites);
  };

  const FilterByLeague = async (leagueID, date) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_events&from=${date}&to=${date}&league_id=${leagueID}&APIkey=${APIKEY}`
    );
    const data = res.data;
    setMatches(data);
    setIsLoading(false);
  };
  const getLeagueLogo = async () => {
    const res = await axios.get(
      `https://apiv3.apifootball.com/?action=get_leagues&APIkey=${APIKEY}`
    );
    const data = res.data;
    console.log(data);
    setLogos(data);
  };

  return (
    <MatchesContext.Provider
      value={{
        getAllMatches,
        getLiveMatches,
        getFavMatches,
        getLeagues,
        getMatch,
        getPlayer,
        getH2H,
        getStandings,
        getComments,
        getLeague,
        getCountry,
        setLeagueMatches,
        FavMatchesOptions,
        FilterByLeague,
        getMatchesById,
        getLeagueLogo,
        getTeam,
        league,
        team,
        logos,
        leagueMatches,
        matches,
        player,
        leagues,
        isLoading,
        fav,
        h2h,
        activeMatch,
        standings,
        comments,
        country,
      }}
    >
      {props.children}
    </MatchesContext.Provider>
  );
};

export default MatchesContext;
