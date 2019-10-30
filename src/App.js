import React, { Component } from 'react'
import './App.css';
import Filmlist from "./Filmlist";
import Filmdetails from "./Filmdetails";
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state = {
    films: TMDB,
    faves: [],
    current: null
  }
  handleFaveToggle = (film)=>{
    const faves = this.state.faves.slice()
    const filmIndex =  faves.indexOf(film)
    
    if(filmIndex <= -1){
      faves.push(film)
      console.log("Out" + film.films.title);
      
    }else{
      faves.splice(filmIndex,1)
      console.log("Add" + film.films.title);
      
    }
    this.setState({faves})
  }
  
  render() {
    console.log(TMDB);
    return (
    <div className="App">
      <div className="film-library">
        <Filmlist onFaveToggle={this.handleFaveToggle} films={this.state.films.films} filmsImg={this.state.films.api_key} faves={this.state.faves}/>
        <Filmdetails films={this.state.current}/>
      </div>
    </div>
      
    )
  }
}

