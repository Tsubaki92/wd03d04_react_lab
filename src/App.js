import React, { Component } from 'react'
import './App.css';
import Filmlist from "./Filmlist";
import Filmdetails from "./Filmdetails";
import TMDB from "./TMDB";
import './index.css'
import './normalize.css'
import axios from "axios"

export default class App extends Component {
  constructor(){
    super()
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  state = {
    films: TMDB,
    faves: [],
    current: {}
  }
  handleFaveToggle = (film)=>{
    const faves = this.state.faves.slice()
    const filmIndex =  faves.indexOf(film)
    
    if(filmIndex <= -1){
      faves.push(film)
      console.log("Add: '" + film.title +"' to Fave List ");
      
    }else{
      faves.splice(filmIndex,1)
      console.log("Remove: '"+ film.title +"' From Fave List ");
      
    }
    this.setState({faves})
  }

  handleDetailsClick = (film)=>{
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en` 
    
    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for: ${film.title}`);
      this.setState({ current: response.data })
    })
  }
  
  
  render() {
    let imges = 'https://image.tmdb.org/t/p/w500/'

    return (
    <div className="App">
      <div className="film-library">
        <Filmlist onFaveToggle={this.handleFaveToggle} detailsClick={this.handleDetailsClick}  films={this.state.films.films} filmsImg={imges} faves={this.state.faves}/>
        <Filmdetails film={this.state.current} filmsImg={imges}/>
      </div>
    </div>
      
    )
  }
}

