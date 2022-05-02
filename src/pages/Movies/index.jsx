import { useEffect, useState } from 'react'

export default function Movies() {
  const [searchParams, setSearchParams] = useState('')
  const [data, setData] = useState([])

  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=`

  const images_url = `https://api.themoviedb.org/3/movie/` //${movie.id}?api_key=${api_key}&language=en-US`
  const images_config_url = 'http://image.tmdb.org/t/p/w500/'

  // const fetchData = (url, param, setter) => {
  //   fetch(url + param)
  //     .then(res => res.json())
  //     .then(setter)
  //     .catch(err => console.log(err))
  // }

  // const fetchMoviesDetails = movie => {
  //   fetchData(
  //     search_url + process.env.REACT_APP_MOVIES_API_KEY + '&query=',
  //     movie,
  //     data => setData(data.results)
  //   )
  // }

  // const searching = () => {
  //   fetchMoviesDetails(searchParams)
  // }

  const handleSearch = e => {
    setSearchParams(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()

    const slug = searchParams.split(' ').join('-').toLowerCase()

    setData([])

    fetch(search_url + import.meta.env.VITE_MOVIES_API_KEY + `&query=${slug}`)
      .then(response => response.json())
      // .then(data => setData(data.items))
      .then(data => setData(data.results))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>movies</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchParams} onChange={handleSearch} />
        <button type="submit">Pesquisar filme</button>
      </form>

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
