import React, { useState } from 'react';
import RemoveFav from './RemoveFav';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './FavCard.css';


const FavCard = (props) => {
    const [isHidden, setHide] = useState(true)

    return(
        <div 
        className="Fav-card"
        onMouseEnter={()=> {isHidden ? setHide(false) : setHide(true)}}
        onMouseLeave={()=> {isHidden ? setHide(false) : setHide(true)}}
        style={{ listStyle: "none", display: "flex", flexDirection: "column", margin: "10px", borderRadius: "10px", padding: "10px", alignItems: "center", width: "10vw"}}>
            {!isHidden &&
                <RemoveFav 
                    id={props.id}                 
                    removeId={props.removeId}
                />
            }

            {!isHidden &&
            <div>
                <h3 className="Fav-name">{props.name}</h3>
            </div>
            
            }
            <AnchorLink href={`#${props.id}`}>
            <img
                className="Beer-img"
                style={{ height: "150px", marginBottom: "10px" }} src={props.image_url}
                alt="beer closeup"
            ></img> 
            </AnchorLink>
        </div>
    )
}

export default FavCard;