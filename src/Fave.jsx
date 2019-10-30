import './index.css'

import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props) {
        super(props)
        
    }
    //this.props.isFave 
    // handleClick = (element) => {
    //     // this.setState({
    //     //   eventSelect:element
    //     // })
    //     console.log("handling Fave click!");
    //     element.stopPropagation()
        
    // }
    handleClick =(element)=>{
        element.stopPropagation()
        console.log("handling Fave click!");
        // Add this line. You'll call the function passed through props
  this.props.onFaveToggle()

  // Delete the `setState` line. You no longer track state here
  // this.setState({isFave: !this.state.isFave})
      }
    state ={
        selectedFilm: null
    }
    Fave(fimeName,filmYear){

    }
    render() {
        return (
            this.props.isFave? 
            <div className="film-row-fave remove_to_queue" onClick={this.handleClick} >
               <p className="material-icons">remove_to_queue</p>
            </div>:
            <div className="film-row-fave add_to_queue" onClick={this.handleClick} >
               <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

