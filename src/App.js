import React, { Component } from 'react'
import './App.css';
import Filmlist from "./Filmlist";
import Filmdetails from "./Filmdetails";
import TMDB from "./TMDB";

export default class App extends Component {
  
  
  render() {
    console.log(TMDB);
    return (
      <div className="film-library">
        <Filmlist films={TMDB.films} filmsImg={TMDB.api_key}/>
        <Filmdetails films={TMDB.films}/>
      </div>
    )
  }
}

