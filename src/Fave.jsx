import './index.css'

import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props) {
        super(props)
        this.state ={
            isFave: false
        }
    }
    // handleClick = (element) => {
    //     // this.setState({
    //     //   eventSelect:element
    //     // })
    //     console.log("handling Fave click!");
    //     element.stopPropagation()
        
    // }
    handleClick =(element)=>{
        element.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
        console.log("handling Fave click!");
      }
    state ={
        selectedFilm: null
    }
    Fave(fimeName,filmYear){

    }
    render() {
        
        

        

        return (
            this.state.isFave? 
            <div className="film-row-fave remove_to_queue" onClick={this.handleClick} >
               <p className="material-icons">remove_to_queue</p>
            </div>:
            <div className="film-row-fave add_to_queue" onClick={this.handleClick} >
               <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

