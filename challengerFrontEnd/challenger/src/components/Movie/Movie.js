import React, { Component, Fragment } from 'react'
//import Card from '@material-ui/core/Card'
import axios from 'axios'
import MovieList from './MovieList.js';

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?page=';
const language = '&language=en-US';
const api_key = '&api_key=1f54bd990f1cdfb230adb312546d765d';

const Search = props => (
  <form onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
  </form>
);

class Movie extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movieData: [],
            query: '',
            page: 1
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.onInput = this.onInput.bind(this);
    }

    onInput(query) {
      this.setState({
        query
      });

      this.searchMovie(query);
    }

    searchMovie(query) {
      const url = `https://api.themoviedb.org/3/search/movie?query=`;

      if(query !== '' || query !== undefined) {
        axios.get(url + query + api_key).then(result =>{
          const movieData = result.data.results;

          this.setState({
            movieData
          })

        }).catch(console.log);
      } else {
        axios.get(baseUrl + this.state.page + language + api_key).then(result =>{
            const movieData = result.data.results;

            this.setState({
                movieData: movieData.concat(movieData)
            })

        }).catch(console.log);
      }

    }

    handleScroll(page) {
       const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
       const body = document.body;
       const html = document.documentElement;
       const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
       const windowBottom = windowHeight + window.pageYOffset;
       if (windowBottom >= docHeight) {
         let statePlus = this.state.page + 1;
         this.setState({
           page: statePlus
         });
         axios.get(baseUrl + this.state.page + language + api_key).then(result =>{
             const movieData = result.data.results;

             this.setState({
                 movieData: movieData.concat(movieData)
             })

         }).catch(console.log);
       }
   }



   componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillMount(){
        axios.get(baseUrl + this.state.page + language + api_key).then(result =>{
            const movieData = result.data.results;

            this.setState({
                movieData
            })

        }).catch(console.log)
    }

    render(){
        const { movieData , query } = this.state;
        const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());

        return(
            <Fragment>
            <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
              <MovieList moviedata = {movieData.filter(isSearched(query))}/>
            </Fragment>

        );
    }
}

export default Movie;
