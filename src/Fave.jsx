import './index.css'
import './normalize.css'
import React, { Component } from 'react'

export default class Fave extends Component {
    
    handleClick =(element)=>{
        element.stopPropagation()
        console.log("handling Fave click!");
        this.props.onFaveToggle()
    }

    state ={
        selectedFilm: null
    }
    
    render() {
        let str = ""
        this.props.isFave? str =  "remove_from_queue" : str =  "add_to_queue"
        return (
            <div className="film-row-fave `{str}`" onClick={this.handleClick} >
               <p className="material-icons">{str}</p>
            </div>
        )
    }
}