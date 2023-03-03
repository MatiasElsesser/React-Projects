// import withResults from '../moks/with-results.json'
import noResults from '../moks/no-results.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResults)
      fetch(`http://www.omdbapi.com/?apikey=c41c4a36&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setResponseMovies(json)
        })
    } else {
      setResponseMovies(noResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
