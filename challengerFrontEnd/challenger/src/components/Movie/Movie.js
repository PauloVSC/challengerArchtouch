import React, { Component } from 'react'
//import Card from '@material-ui/core/Card'
import axios from 'axios'
import MovieList from './MovieList.js';

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?page=';
const page = null;
const language = '&language=en-US';
const api_key = '&api_key=1f54bd990f1cdfb230adb312546d765d';


class Movie extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movieData: [],
            page: this.props.page + 1
        }
    
    }
    
    componentWillMount(){
        axios.get(baseUrl + page + language + api_key).then(result =>{
            const movieData = result.data.results;

            this.setState({
                movieData
            })

        }).catch(console.log)
    }

    render(){

        const { movieData } = this.state;
        return(
            <MovieList moviedata = {movieData}/>
        );
    }
}

export default Movie;