import './index.css'
import './normalize.css'
import React, { Component } from 'react'

export default class Fave extends Component {
    
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

