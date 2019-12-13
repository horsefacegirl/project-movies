import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { MovieListWrapper, MovieCover } from './styles'

const MovieList = () => {
  const [movies, setMovies] = useState([])
  const apiKey = "34f303052aebcecccf74022a56b92eee"

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <MovieListWrapper>
      {movies.map(movie => (
        <MovieCover>
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
            <h1>{movie.title}</h1>
          </Link>
        </MovieCover>
      ))}
    </MovieListWrapper>
  )
}

export default MovieList