import { useEffect, useState } from 'react'
import Search from '../../components/Search'

export default function Movies() {
  const [searchParams, setSearchParams] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const search_url = `https://api.themoviedb.org/3/search/movie?api_key=`

  const images_url = `https://api.themoviedb.org/3/movie/` //${movie.id}?api_key=${api_key}&language=en-US`
  const images_config_url = 'http://image.tmdb.org/t/p/w500/'

  const handleSearch = e => {
    setSearchParams(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    setError(null)

    const slug = searchParams.split(' ').join('-').toLowerCase()

    setData([])

    if (!slug.length || slug.length < 3) {
      setSearchWord('')
      return setError('Busque com no mínimo 3 caracteres')
    }

    fetch(
      search_url +
        import.meta.env.VITE_MOVIES_API_KEY +
        `&query=${slug}` +
        '&language=pt-br'
    )
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(err => console.log(err))

    setSearchWord(searchParams)
    setSearchParams('')
  }

  return (
    <div>
      <Search
        sectionName={'Filmes'}
        onSubmitFunction={onSubmit}
        nameValue={'filme'}
        searchParams={searchParams}
        searchFunction={handleSearch}
        placeholderValue={'filmes'}
        buttonContent={'Pesquisar filme'}
        searchWord={searchWord}
        error={error}
      />

      {data &&
        data.map(movie => (
          <ul key={movie.id}>
            <li>Título: {movie.original_title}</li>
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
