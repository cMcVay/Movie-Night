import React from 'react';
import {descriptionSpace} from '../styles/style';


function MovieComponent(props) {
    const film = props.film;
    
    return (
        <div>
            <img src={film.moviePoster} alt="moviePoster" style={{width: "200px", height: "300px"}}></img>
            <h2>{film.title}</h2>
            <p style={descriptionSpace}>{film.description}</p>
        </div>
    )
}

export default MovieComponent;