import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { MatchesContextProvider } from './Context/MatchesContext'
import {ThemeProvider} from 'styled-components'

const theme = {
  colors:{
    graphit:"#1e2024",
    grey:"#393b40",
    blue:"#2e8bff",
    smokeWhite:"#c1c3c7",
    smokeBlue:"rgba(46, 139, 255,0.3)",
  },
  fonts:{
    robotoFont:"Roboto Condensed, sans-serif",
    asapCondensedFont:"Asap Condensed, sans-serif",
    robotoCondensedFont:"Roboto Condensed, sans-serif",
  }
}
ReactDOM.render(
  <React.StrictMode>
    <MatchesContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </MatchesContextProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
