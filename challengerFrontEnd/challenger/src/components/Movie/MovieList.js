import React, {Fragment} from 'react';
import MovieCard from './MovieCard.js';
import { Grid } from '@material-ui/core';


function MovieList ({moviedata}) {

    return(
        <Fragment>
            <h2>Movies List from TMDb</h2>
        <Grid container spacing={32} justify="center">
        {moviedata.map( (results) => {
            return <MovieCard movie={results}/>
        })}
        </Grid>
        </Fragment>
    );
}

export default MovieList;
