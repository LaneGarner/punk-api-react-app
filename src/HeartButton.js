import React, { Component, useState } from 'react';

export default function HeartButton(props) {

    const [fav, setFav] = useState(false)


    const handleClick = () => {
        props.moveId(props.id)
    }

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
            {openHeart}
        </button>
    )
}