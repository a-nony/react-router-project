import React from 'react'
import Moviecard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Moviecard key={movie.title} movie={movie}/>
      ))}
    </div>
  )
}

export default MovieList
