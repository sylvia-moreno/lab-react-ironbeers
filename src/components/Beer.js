import React, { Component } from 'react';


const  Beer = (props) => { 
        return (
            <>
                <img src={props.image_url} />
                <p>{props.name}</p>
                <p>{props.tagline}</p>
                <p>{props.contributed_by}</p>
            </>
        )
}

export default Beer;