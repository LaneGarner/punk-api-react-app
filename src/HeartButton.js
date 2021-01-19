import React, { Component, useState } from 'react';

export default function HeartButton(props) {

    const [fav, setFav] = useState(false)


    const handleClick = () => {
        // fav ? setFav(false) : setFav(true)
        // this.state.fav ? this.setState({ fav: false}) : this.setState({ fav: true})
        // console.log(props.id)
        props.moveId(props.id)
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
            {/* {fav ? filledHeart() : openHeart() } */}
            {openHeart}
        </button>
    )
}





// class HeartButton extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             fav: false
//         }
//     }
    
//     handleClick = () => {
//         // this.state.fav ? this.setState({ fav: false}) : this.setState({ fav: true})
//         console.log(props.id)
//     }
    
//     render() {

//         let buttonStyle = {
//             background: "transparent",
//             border: "none",
//             cursor: "pointer",
//             color: "tomato",
//             outline: "none",
//             fontSize: "30px"
//         }

        
//         let openHeart = () => {
//             return <i class="far fa-heart"></i>
//         }
//         let filledHeart = () => {
//             return <i class="fas fa-heart"></i>
//         }

//         return (
//             <button 
//             style={buttonStyle} 
//             onClick={this.handleClick}>{this.state.fav ? filledHeart() : openHeart() }
//             </button>
//         )
//     }
// }

// export default HeartButton