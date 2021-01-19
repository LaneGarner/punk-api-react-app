import React, { useState } from 'react'
import HeartButton from './HeartButton'
import UnHeartButton from './UnHeartButton'

const BeerCard = (props) => {
    const {id, name, image_url, malts, hops, yeast} = props
    const [isHidden, setHide] = useState(true)

    return(
        <div id={id} style={{ zIndex: 999, listStyle: "none", display: "flex", background: "#333", margin: "20px", borderRadius: "10px", padding: "20px", alignItems: "center", width: "60vw"}}>
            <img 
                style={{ height: "300px", margin: "20px" }} 
                src={props.image_url}
                alt="image of beer"
                onClick={()=> {isHidden ? setHide(false) : setHide(true)}}
            ></img>
            {isHidden ?
                <div></div> :
                <div>
                    <p>Malts: {malts}</p>
                    <p>Hops: {hops}</p>
                    <p>Yeast: {yeast}</p>
                </div>
            }
            <div style={{padding: "20px"}}>
                <h5>First brewed: <span>{props.first_brewed}</span></h5>
                <p>ABV: {props.abv}</p>
            </div>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.tagline}</h4>
                <p style={{fontSize: "18px"}}>{props.description}</p>                
                <div>
                    {props.arrayOfFavBeer.includes(props.id) ?
                    <UnHeartButton id={props.id} removeId={props.removeId} /> :
                    <HeartButton id={props.id} moveId={props.moveId} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default BeerCard;