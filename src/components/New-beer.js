import React, { Component } from 'react';
import axios from 'axios';

class Newbeer extends Component {
    state = { name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', contributed_by: '', message: '' }

    handleFormSubmit = (event) => {
        debugger
        event.preventDefault();

        axios.post("https://ih-beer-api.herokuapp.com/beers/new", this.state )
            .then( (res) => {
                debugger
                this.setState({ name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', contributed_by: '' });
                this.setState({ message: "Beer add successfully." });
            })
            .catch( error => console.log(error) )

    } 

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render () {
        return (
            <>
                <h1>Add a Newbeer !!</h1>
                {!!this.state.message ? <p>{this.state.message}</p> : null}
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

                    <label>TagLine:</label>
                    <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>

                    <label>Description:</label>
                    <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />

                    <label>First brewed:</label>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>

                    <label>Brewers tips:</label>
                    <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>

                    <label>Attenuation level:</label>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>

                    <label>Contributed by:</label>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>


                    <button type="submit"> Add beer</button>
                  </form>
            </div>
            </>
        )
    }
}

export default Newbeer;