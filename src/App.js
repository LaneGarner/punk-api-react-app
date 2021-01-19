import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
// import { Favs } from './Favs'
import BeerCard from './BeerCard'
import FavCard from './FavCard'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        arrayOfBeer: [],
        arrayOfFavBeer: [],
      }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers/')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })    
  }

  moveId = (movedId) => {
    // console.log(movedId)
    // this.setState({ arrayOfFavBeer: [...new Set(this.state.arrayOfFavBeer, movedId)] })
    this.setState({ arrayOfFavBeer: [...this.state.arrayOfFavBeer, movedId] })
  }

  removeId = (removedId) => {
    const copyOfFavs = this.state.arrayOfFavBeer
    copyOfFavs.map((beer, i) => {
      // console.log(removedId)
      beer === removedId && copyOfFavs.splice(i, 1)
      this.setState({ arrayOfFavBeer: [...copyOfFavs]})
      // console.log(this.state.arrayOfFavBeer)
    })
    
  }

  fillHeart = (beerId) => {
    // console.log(id)
    // console.log("fill")
    // const copyOfFavs = this.state.arrayOfFavBeer


    // {this.state.arrayOfBeer.map(beer => 

    // console.log(this.state.arrayOfFavBeer)

      // this.state.arrayOfFavBeer.includes(beer.id) ?
      // console.log(beer.id) :
      // console.log("poop")
      
      //   {this.state.arrayOfFavBeer.includes(beer.id) && 
      //   console.log("true")
      
      // }

      // )}


  }

  componentDidUpdate() {
    // console.log(this.state.arrayOfFavBeer)
    // favs = this.state.arrayOfFavBeer
    // console.log(favs)
  }

  render() {

    return (
      <div className="App">
          <header className="App-body Bar-bckgrnd">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-name">🍺🍻🍺 faveBrüs 🍻🍺🍻</h1>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            
            {this.state.arrayOfFavBeer.length === 0 ?
            <AnchorLink href="#main" className="App-tag">⬇️ Like a beer below to add it to your faves ⬇️</AnchorLink> :
            <h3 className="App-tag">My Faves</h3> }
            <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>

            
              {this.state.arrayOfBeer.map(beer => 
              <li style={{zIndex: 999, listStyle: "none"}}>
                {this.state.arrayOfFavBeer.includes(beer.id) && 
                <FavCard  
                key={beer.id} 
                id={beer.id} 
                name={beer.name}  
                image_url={beer.image_url}
                removeId={this.removeId}
                />
              
              }
              </li>
              )}
            </ul>
        </div>
                </header>
            <body className="App-body" id="main">
          <ol style={{zIndex: 999}}>{this.state.arrayOfBeer.map((beer) => {
            return (
              <BeerCard 
                key={beer.id}
                id={beer.id}
                name={beer.name} 
                image_url={beer.image_url}
                first_brewed={beer.first_brewed}
                tagline={beer.tagline}
                abv={beer.abv}
                description={beer.description}
                moveId={this.moveId}
                removeId={this.removeId}
                fillHeart={this.fillHeart}
                arrayOfBeer={this.state.arrayOfBeer}
                arrayOfFavBeer={this.state.arrayOfFavBeer}
              />
            )
          })}
          </ol>
          <ScrollUpButton className="Scroll-up"/>
        </body>
      </div>
    );
  }
}

export default App;
