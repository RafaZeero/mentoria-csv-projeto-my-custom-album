import { useState } from 'react'

//components
import Search from '../../components/Search'

//style
import './games.css'

const games_list_url = 'https://api.rawg.io/api/games?key='

export default function Games() {
  const [searchParams, setSearchParams] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

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
      games_list_url + import.meta.env.VITE_GAMES_API_KEY + `&search=${slug}`
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
        sectionName={'Games'}
        onSubmitFunction={onSubmit}
        nameValue={'games'}
        searchParams={searchParams}
        searchFunction={handleSearch}
        placeholderValue={'games'}
        buttonContent={'Pesquisar jogo'}
        searchWord={searchWord}
        error={error}
      />

      {data &&
        data.map(game => (
          <div key={game.id}>
            {game.background_image !== undefined && (
              <img src={game.background_image} alt="Game poster" />
            )}
            <h2>{game.name}</h2>

            <li>
              Gênero:{' '}
              {game.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </li>
            <li>Data de Lançamento:{game.released}</li>
          </div>
        ))}
    </div>
  )
}
