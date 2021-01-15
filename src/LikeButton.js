import React, { useState, Component } from 'react'
import Heart from "react-animated-heart";

const LikeButton = () => {
    const [isClick, setClick] = useState(false);
    return (
        <div className="App">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>    )

}

export default LikeButton;