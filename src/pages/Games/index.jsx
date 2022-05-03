import './games.css'

import { useState } from 'react'

const games_list_url = 'https://api.rawg.io/api/games?key='

export default function Games() {
  const [searchTerm, setSearchTerm] = useState('')
  const [gameResults, setGameResults] = useState([])

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()

    const slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])

    fetch(
      games_list_url + import.meta.env.VITE_GAMES_API_KEY + `&search=${slug}`
    )
      .then(response => response.json())
      .then(data => setGameResults(data.results))
      .catch(err => console.log(err))

    setSearchTerm('')
  }

  return (
    <div>
      <h1>games</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button type="submit">Pesquisar</button>
      </form>

      {gameResults &&
        gameResults.map(game => (
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
