import React from 'react'

const BeerCard = (props) => {
    return(
        <li style={{ listStyle: "none", display: "flex", background: "#333", margin: "20px", borderRadius: "10px", padding: "20px", alignItems: "center" }}>
            <img style={{ height: "300px", margin: "20px" }} src={props.image_url}></img>
            <div style={{padding: "20px"}}>
                <h5>First brewed: <span>{props.first_brewed}</span></h5>
                <p>ABV: {props.abv}</p>
            </div>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.tagline}</h4>
                <p style={{fontSize: "18px"}}>{props.description}</p>
                <i class="far fa-heart" style={{cursor: "pointer", color: "tomato"}}></i>
            </div>
        </li>
    )
}

export default BeerCard;