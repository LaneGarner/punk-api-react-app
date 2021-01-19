import React, { useState } from 'react';
import RemoveFav from './RemoveFav';
import './FavCard.css';


const FavCard = (props) => {
    // const {name, image_url, malts, hops, yeast} = props
    const [isHidden, setHide] = useState(true)

    return(
        <div style={{ listStyle: "none", display: "flex", flexDirection: "column", margin: "10px", borderRadius: "10px", padding: "10px", alignItems: "center", width: "18vw"}}>
            <RemoveFav 
                id={props.id}                 
                removeId={props.removeId}
            />
            <img 
                style={{ height: "150px", marginBottom: "10px" }} src={props.image_url}
                alt="beer closeup"
            ></img>
            <div>
                <h3 className="Fav-name">{props.name}</h3>
                <p style={{fontSize: "18px"}}>{props.description}</p>
            </div>
        </div>
    )
}

export default FavCard;