import React from 'react'
import './index.css'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = (props) => {
    let posterUrl2 = props.urlP
    let try4 = props.item.poster_path

    let handleDetailsClick =(film)=>{
      console.log('Fetching details for and the film title' + film);
      
    }
    return (
        <div className="film-row" onClick={() => handleDetailsClick(props.item.title)}>
    <FilmPoster posterUrl={posterUrl2} try4={try4} />
  <div className="film-summary">
    <h1>{props.item.title}</h1>
    <p>{new Date().getFullYear(props.item.release_date)}</p>
    <Fave onFaveToggle={props.onFaveToggle}/>
  </div>
</div>
        
    )
}

export default FilmRow
