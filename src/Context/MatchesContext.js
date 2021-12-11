import axios from 'axios';
import { useState, createContext } from 'react';
import { GiConsoleController } from 'react-icons/gi';

const MatchesContext = createContext({
    isLoading: false,
    getAllMatches: () => {},
    matches: [],
    favourites:[]
  });
  export const MatchesContextProvider = props => {
    const [matches, setMatches] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const APIKEY = "8d42bd7a0aa39ec46b432d5c0358a16e06effaff8adf033e0db8a9607de68772";

    const AddFavourite = (matchID) =>{
      favourites.push(matchID)
      setFavourites({favourites: favourites})
    }
    const getAllMatches = async (date) => {
      try {
        setIsLoading(true);
        console.log(isLoading)
        const res = await fetch(`https://apiv3.apifootball.com/?action=get_events&from=${date}&to=${date}&APIkey=${APIKEY}`);
        const data = await res.json();

        
        setMatches(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setIsLoading(false);
      }
    };
    const getLiveMatches = async(date) => {
        try {
          setIsLoading(true);
          const res = await fetch(`https://apiv3.apifootball.com/?action=get_events&match_live=1&from=${date}&to=${date}&APIkey=${APIKEY}`);
         const data = await res.json();
         
          setMatches(data);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
          setIsLoading(false);
        }
      };
    /*
    const getCompetition = async league => {
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
            matches,
            isLoading,
            AddFavourite,
            favourites
          }}
        >
          {props.children}
        </MatchesContext.Provider>
      );
    };
    
    export default MatchesContext;
