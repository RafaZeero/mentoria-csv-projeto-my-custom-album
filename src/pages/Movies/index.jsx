import { useState } from 'react'

export default function Movies() {
  const [data, setData] = useState()
  const [searchParams, setSearchParams] = useState('')


  const images_url = `https://api.themoviedb.org/3/movie/` //${movie.id}?api_key=${api_key}&language=en-US`
  // const configuration_url = `https://api.themoviedb.org/3/configuration?${api_key}`
  const images_config_url = 'http://image.tmdb.org/t/p/w500/'

  // const api_key = '95c3876f21b978a1fa8d6961c33113e9'
  // const url =
  //   'https://api.themoviedb.org/3/search/movie?api_key=95c3876f21b978a1fa8d6961c33113e9&query=Iron%20Man'
  // const fetchMovies = () => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setData(data.results))
  //     .then(data => console.log(data.results))
  //     .catch(err => console.log(err))
  // }

  // const fetchConfigurationUrl = () => {
  //   fetch(configuration_url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }
  const fetchData = (url, param, setter) => {
    fetch(url + param)
      .then(res => res.json())
      .then(setter)
      .catch(err => console.log(err))
  }

  const fetchMoviesDetails = movie =>
    fetchData(search_url, movie, data => setData(data.results))

  const fetchMovieImages = path => {
    // fetch(images_url + id + 'images?' + api_key + '&language=en-US')
    fetch(images_config_url + path)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err))
  }

  const searching = () => {
    fetchMoviesDetails(searchParams)
  }

  return (
    <div>
      <h1>movies</h1>

      <input
        type="text"
        value={searchParams}
        onChange={e => setSearchParams(e.target.value)}
      />
      <button onClick={e => searching(e)}>pegar filme</button>

      {data &&
        data.map(movie => (
          <ul key={movie.id}>
            <li>Título: {movie.original_title}</li>
            {/* <li>{`${url}${movie.poster_path}`}</li> */}
            <img
              src={`${images_config_url}${movie.poster_path}`}
              alt="Poster"
            />
            <li>Data de estreia: {movie.release_date}</li>
            <p>{movie.overview}</p>
          </ul>
        ))}
    </div>
  )
}
