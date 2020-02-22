import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerDetails extends Component {
    state = {
        beer: {},
        isLoading: false,
    }

  componentDidMount(){
      this.props.isRandom ? this.getRandomBeer() : this.getSingleBeer();
  }


  getRandomBeer = () => {
      debugger
    axios.get(`https://ih-beer-api.herokuapp.com/beers`)
        .then( res =>{
        const beers = res.data;
        const randomBeer = beers[Math.floor(Math.random() * beers.length)]
        if(res.status === 200) {
            this.setState({isLoading: true});
        }
        this.setState({beer: randomBeer});
        })
        .catch((err)=>{
            console.log(err)
        })
  }

  getSingleBeer = () => {
      const { params } = this.props.match;
      
      axios.get(`https://ih-beer-api.herokuapp.com/beers/${params.id}`)
        .then( res => {
            const beer = res.data;
            if(res.status === 200) {
                this.setState({isLoading: true});
            }
            this.setState({beer: beer});
        })
        .catch(err =>console.log(err))
  }

  render(){
    return(
      <div>
            <h1>Detail of beer selected</h1>
            {!this.state.isLoading ? (
                <p>is loading ...</p>
            ) : (
            <>
                <h2>{this.state.beer.name}</h2>
                <img src={this.state.beer.image_url}/>
                <ul>
                    <li style={{fontSize: '12px'}}>{this.state.beer.tagline}</li>
                    <li>{this.state.beer.first_brewed}</li>
                    <li>{this.state.beer.attenuation_level}</li>
                    <li>{this.state.beer.description}</li>
                    <li>{this.state.beer.contributed_by}</li>
                </ul>
                <Link to={'/beers'}>See all beers</Link>
            </>
        )}
      </div>
    )
  }
}

export default BeerDetails;