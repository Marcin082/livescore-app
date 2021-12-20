import { useState,useReducer, createContext } from 'react';
import axios from 'axios';
import { SortByLeague,AddTopLeagues } from '../Helpers/MatchesSort';

const MatchesContext = createContext({
    isLoading: false,
    getAllMatches: () => {},
    matches: [],
    leagues:[],
});

export const MatchesContextProvider = props => {
    const [matches, setMatches] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [fav,setFav]= useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const APIKEY = "749b6abefe2f1f0cb0221c4c8ba9ea33ab1e606cd719ec6463735e2f260eaedc";
    
    const getAllMatches = async (date) => {
      console.log("hello")
        setIsLoading(true);
        const res = await axios.get(`https://apiv3.apifootball.com/?action=get_events&from=${date}&to=${date}&APIkey=${APIKEY}`);
        const data = res.data;
        setMatches(data);
        setIsLoading(false);
    };
    const getLiveMatches = async(date) => {
          setIsLoading(true);
          const res = await axios.get(`https://apiv3.apifootball.com/?action=get_events&match_live=1&from=${date}&to=${date}&APIkey=${APIKEY}`);
          const data = res.data;
          setMatches(data);
          setIsLoading(false);
      };

    const  getFavMatches =  () => {
        setIsLoading(true);
        const newData = matches.filter(match=>fav.includes(match.match_id))
        setMatches(newData);
        setIsLoading(false);
    };
    
    const getLeagues = async() => {
        const res = await axios.get(`https://apiv3.apifootball.com/?action=get_leagues&APIkey=${APIKEY}`);
        const data = res.data;
        setLeagues(data)
      };
    const  FavMatchesOptions = (option,match) => {
      let favourites= [...fav]
      console.log("hello")
      if(option==="add"){
        favourites.push(match);
      }
      else{
        const index =favourites.indexOf(match);
        favourites.splice(index, 1);
      }
      setFav(favourites)
    };

    const  FilterByLeague = async(leagueID,date) => {
      setIsLoading(true);
      const res = await axios.get(`https://apiv3.apifootball.com/?action=get_events&from=${date}&to=${date}&league_id=${leagueID}&APIkey=${APIKEY}`);
      const data = res.data;
      setMatches(data);
      setIsLoading(false);
    };
    /*const getCompetition = async league => {
        try {
          if (region === 'all') {
            getAllCountries();
          } else {
            setIsLoading(true);
    
            const res = await axios.get(
              `https://restcountries.eu/rest/v2/region/${region}`
            );
            const data = res.data;
            const formattedRegion = region.replace(/\b\w/g, c => c.toUpperCase());
    
            setSelectedRegion(formattedRegion);
            setCountries(data);
            setSearchValues('');
            setSearchList([]);
            setIsLoading(false);
          }
        } catch (err) {
          console.log(err.message);
    
          setIsLoading(false);
        }
      };
      
    
      const searchCountry = values => {
        setSearchValues(values);
    
        if (values) {
          const filteredSearch = countries.filter(country =>
            country.name.toLowerCase().includes(values.toLowerCase())
          );
    
          setSearchList(filteredSearch);
        } else {
          setSearchList([]);
        }
      };
    
      const getBorderCountries = async code => {
        try {
          const res = await axios.get(
            `https://restcountries.eu/rest/v2/alpha/${code}`
          );
          const data = res.data;
    
          const countriesData = { name: data.name, code: data.alpha3Code };
    
          return countriesData;
        } catch (err) {
          console.log(err.message);
          setIsLoading(false);
        }
      };
    */
      return (
        <MatchesContext.Provider
          value={{
            getAllMatches,
            getLiveMatches,
            getFavMatches,
            getLeagues,
            FavMatchesOptions,
            FilterByLeague,
            matches,
            leagues,
            isLoading,
            fav,

          }}
        >
          {props.children}
        </MatchesContext.Provider>
      );
    };
    
    export default MatchesContext;
