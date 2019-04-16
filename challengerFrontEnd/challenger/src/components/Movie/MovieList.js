import React, {Fragment} from 'react';
import MovieCard from './MovieCard.js';
import { Grid } from '@material-ui/core';


function MovieList ({moviedata}) {

    return(
        <Fragment>
            <h2>Movies List from TMDb</h2>
        <Grid container spacing={32} justify="center">
        {moviedata.map( (results, index) => {
            return <a href="" key={index} id={results.id}> <MovieCard movie={results}/> </a>
        })}
        </Grid>
        </Fragment>
    );
}

export default MovieList;
