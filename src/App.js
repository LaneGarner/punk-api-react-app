import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BeerCard from './BeerCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers/')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
      })    
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <ol>{this.state.arrayOfBeer.map((beer, i) => {
            return (
              <BeerCard 
                key={i} 
                name={beer.name} 
                image_url={beer.image_url}
                first_brewed={beer.first_brewed}
                tagline={beer.tagline}
                abv={beer.abv}
                description={beer.description}
              />
            )
          })}</ol>
        </header>
      </div>
    );
  }

}

export default App;
