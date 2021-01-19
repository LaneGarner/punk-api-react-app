import React, { useState } from 'react';
import RemoveFav from './RemoveFav';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './FavCard.css';


const FavCard = (props) => {
    // const {name, image_url, malts, hops, yeast} = props
    const [isHidden, setHide] = useState(true)

    return(
        <div 
        onMouseEnter={()=> {isHidden ? setHide(false) : setHide(true)}}
        onMouseLeave={()=> {isHidden ? setHide(false) : setHide(true)}}
        style={{  listStyle: "none", display: "flex", flexDirection: "column", margin: "10px", borderRadius: "10px", padding: "10px", alignItems: "center", width: "18vw"}}>
            {!isHidden &&
                // <img style={{ height: "150px", marginBottom: "10px" }} src={props.image_url} alt="beer closeup"></img> :
                <RemoveFav 
                    id={props.id}                 
                    removeId={props.removeId}
                />
            }

            {!isHidden &&
            <div>
                <h3 className="Fav-name">{props.name}</h3>
                {/* <p style={{fontSize: "18px"}}>{props.description}</p> */}
            </div>
            
            }
            <AnchorLink href={`#${props.id}`}>
            <img 
                style={{ height: "150px", marginBottom: "10px" }} src={props.image_url}
                alt="beer closeup"
            ></img> 
            </AnchorLink>

            {/* } */}

            
        </div>
    )
}

export default FavCard;