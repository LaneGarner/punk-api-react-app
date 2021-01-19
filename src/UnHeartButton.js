import React, { Component, useState } from 'react'

export default function UnHeartButton(props) {

    const [fav, setFav] = useState(true)


    const handleClick = () => {
        props.removeId(props.id)
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
        {filledHeart}
        </button>
    )
}