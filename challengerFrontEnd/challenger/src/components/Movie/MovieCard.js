import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const baseImageUrl ='https://image.tmdb.org/t/p/w185';

function MovieCard({movie, classes}) {

    var image_url = baseImageUrl.concat(movie.poster_path);

    return(

        <Card className={classes.card}>
        <CardHeader className={classes.cardHeader}
        title={movie.original_title}
        />
        <CardMedia
        className={classes.media}
        image =  {image_url}
        title={movie.original_title}
        />
        <CardContent>
        <Typography component="p">
            {movie.overview}
        </Typography>
        </CardContent>
        </Card>
    )
}

export default withStyles({
    card: {
        maxWidth: 280,
        margin: "1em",
        maxHeight: 330
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardHeader: {
        maxHeight: 50
      }
})(MovieCard);

/*
        <Card className={classes.item}>
            <CardMedia/>
            <CardContent>
                <Typography>{name}</Typography>
            </CardContent>
        </Card>
        */