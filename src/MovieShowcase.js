import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(movieObject => {
      return <MovieCard title={movieObject.title} IMDBRating={movieObject.IMDBRating} genres={movieObject.genres} poster={movieObject.poster} />
    }) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
