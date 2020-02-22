import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                <ul>
                    <li style={{listStyle: 'none'}}><Link to="/beers">Show all beers</Link></li>
                    <li style={{listStyle: 'none'}}><Link to="/random-beer">Show a beer randomly</Link></li>

                </ul>
            </>
        )
    }
}

export default Home;
