import React from 'react'

import FilmRow from "./FilmRow";
import { generateKeyPair } from 'crypto';

const Filmlist = (props) => {

    console.log(props)
    var url = props.filmsImg
    let filmRow = props.films.map(element =>{
        return <FilmRow item={element} urlP={url}/>} )

    // let img = props.films.map((item,index) => {
    //     return <img src={url+item.poster_path}/>
    // })

    let handleFilterClick = (filter)=>{
        if(filter === 'Faves'){
            console.log('FaveSetting filter to and the filter argument');
        }else{
            console.log('AllSetting filter to and the filter argument');
        }
        
    }
    
    return (

<div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter"  onClick={() => handleFilterClick('All')}>
            ALL
            <span className="section-count">{props.films.length}</span>
        </div>
        <div className="film-list-filter"  onClick={() => handleFilterClick('Faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>        
    {filmRow}
        </div>
    )
}

export default Filmlist
