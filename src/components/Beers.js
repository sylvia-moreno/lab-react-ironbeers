import React, { Component } from 'react';
import axios from 'axios';
import Beer from './Beer';
import { Link } from 'react-router-dom';


class Beers extends Component {
    state = {
        beers: [],
        isLoading: false,
    }

    componentDidMount() {
        this.getBeer();
    }

    getBeer = () => {
        axios.get(`https://ih-beer-api.herokuapp.com/beers`)
        .then( res =>{
        const beers = res.data;
        if(res.status === 200) {
            this.setState({isLoading: true});
        }
        this.setState({beers: beers});
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render () {
        
        return (
            <>
                <h1>List of Beers</h1>
                {!this.state.isLoading ? (
                    <p>is loading ...</p>
                ) : (
                <ul>
                    {this.state.beers.map((beer, i) => (
                        <Link to={`/beer/${beer._id}`}>
                            <Beer key={i} {...beer} />
                        </Link>
                    ))}
                    
                </ul>
                )}
            </>
        )
    }
}

export default Beers;