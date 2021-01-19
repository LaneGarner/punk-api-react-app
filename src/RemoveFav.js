import React, { Component, useState } from 'react';
import ('./RemoveFav.css');

export default function RemoveFav(props) {
    
    const [fav, setFav] = useState(true)

    const handleClick = () => {
        props.removeId(props.id)
    }

    const buttonStyle = {
            background: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none",
            fontSize: "30px",
            position: "absolute",
            transform: "translate(-40px, -20px)",
            fontWeight: 100,
        }
        
    return (
        <button
        className="Close-button"
        style={buttonStyle} 
        onClick={handleClick}> 
        x
        </button>
    )
}