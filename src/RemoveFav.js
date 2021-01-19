import React, { Component, useState } from 'react';
import ('./RemoveFav.css');

export default function RemoveFav(props) {

    const [fav, setFav] = useState(true)


    const handleClick = () => {
        // fav ? setFav(false) : setFav(true)
        // this.state.fav ? this.setState({ fav: false}) : this.setState({ fav: true})
        // console.log(props.id)
        props.removeId(props.id)
        // setFav()
    }

    // const setFav = () => {
    //             this.state.fav ? this.setState({ fav: false}) : this.setState({ fav: true})

    // }

    const buttonStyle = {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            // color: "tomato",
            outline: "none",
            fontSize: "30px",
            position: "absolute",
            // left: "-2px",
            transform: "translate(-40px, -20px)",
            // transform: "translateY(-30px)",
            fontWeight: 100,
        }
        

    return (
        <button
        className="Close-button"
        style={buttonStyle} 
        onClick={handleClick}> 
        x
        {/* {fav ? filledHeart : openHeart } */}
        {/* button */}
        </button>
    )
}
