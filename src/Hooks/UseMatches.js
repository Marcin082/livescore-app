import { useContext } from 'react';

import MatchesContext from '../Context/MatchesContext';

const useCountries = () => {
  const ctx = useContext(MatchesContext);

  return ctx;
};

export default useCountries;