import React, { Component } from 'react'

class HeartButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fav: false
        }
    }

    
    handleClick = () => {
        this.state.fav ? this.setState({ fav: false}) : this.setState({ fav: true})
    }
    
    render() {

        let buttonStyle = {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "tomato",
            outline: "none",
            fontSize: "30px"
        }

        
        let openHeart = () => {
            return <i class="far fa-heart"></i>
        }
        let filledHeart = () => {
            return <i class="fas fa-heart"></i>
        }

        return (
            <button 
            style={buttonStyle} 
            onClick={this.handleClick}>{this.state.fav ? filledHeart() : openHeart() }
            </button>
        )
    }
}

export default HeartButton