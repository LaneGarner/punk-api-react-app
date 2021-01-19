import React, { Component, useState } from 'react'

export default function UnHeartButton(props) {

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
            color: "tomato",
            outline: "none",
            fontSize: "30px"
        }
        
    const openHeart = <i className="far fa-heart"></i>
    const filledHeart = <i className="fas fa-heart"></i>

    return (
        <button 
        style={buttonStyle} 
        onClick={handleClick}> 
        {filledHeart}
        {/* {fav ? filledHeart : openHeart } */}
        {/* button */}
        </button>
    )
}
