import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';

const baseImageUrl ='https://image.tmdb.org/t/p/w185';

function MovieCard({movie, classes}) {

    var image_url = baseImageUrl.concat(movie.poster_path);

    return(

        <Card className={classes.card}>
        <CardMedia
        className={classes.media}
        image =  {image_url}
        title={movie.title}
        />
        <CardHeader className={classes.cardHeader}
        title={movie.title}
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
        maxHeight: 270,
        minHeigth: 270,
        displa: "flex"
      },
      media: {
        width: "100%",
        height: "100%",
        paddingTop: '56.25%', // 16:9
      },
      cardHeader: {
        flexShrink: 1,
        margin: "1em",
        maxHeight: 50
      }
})(MovieCard);
