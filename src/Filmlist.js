import React, {Component} from 'react'

import FilmRow from "./FilmRow";
import './index'
import { generateKeyPair } from 'crypto';


export default class Filmlist extends Component {
    
    state={
        filter:'All'
    }
    
    render(){
    
    

    console.log(this.props)
    var url = this.props.filmsImg
    let filmRow = this.props.films.map(element =>{
        return <FilmRow
         item={element} id={element.id} 
         onFaveToggle={() => this.props.onFaveToggle(element)}
            urlP={url}/>
    })
    
    // let img = props.films.map((item,index) => {
    //     return <img src={url+item.poster_path}/>
    // })


    let handleFilterClick = (filter)=>{
        console.log({filter});
        
        this.setState({
            filter: filter
        })
        
    }

    return (

        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'All' ? 'is-active' : ''}`}  onClick={() => handleFilterClick('All')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className={`film-list-filter ${this.state.filter === 'Faves' ? 'is-active' : ''}`}  onClick={() => handleFilterClick('Faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
                    
            {filmRow}
        </div>
    )
}
}

