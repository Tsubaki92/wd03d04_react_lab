import React, {Component} from 'react'
import FilmRow from "./FilmRow";
import './index'

export default class Filmlist extends Component {
    
    state={
        filter:'all'  
    }
    
    render(){

    console.log(this.props)
    var url = this.props.filmsImg

    let object = ""
    if(this.state.filter === 'all'){
        object = this.props.films
    }else{
        object = this.props.faves
    }

    let filmRow = object.map(element =>{
        return <FilmRow
            item={element} id={element.id} 
            isFave={this.props.faves.includes(element)}
            onFaveToggle={() => this.props.onFaveToggle(element)}
            detailsClick={this.props.detailsClick}
            urlP={url}
        />
    })

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
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}  onClick={() => handleFilterClick('all')}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}  onClick={() => handleFilterClick('faves')}>
                        FAVES
                        <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>
                {filmRow}
            </div>
        )
    }
}