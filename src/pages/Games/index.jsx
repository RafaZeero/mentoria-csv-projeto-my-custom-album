import { useState } from 'react'

//components
import Search from '../../components/Search'

import GamesAPI from '../../api/games'

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
      // .then(data => console.log(data.results))
      .catch(err => console.log(err))

    setSearchWord(searchParams)
    setSearchParams('')
  }

  return (
    <div>
      <Search
        sectionName={'Jogos'}
        onSubmitFunction={onSubmit}
        nameValue={'games'}
        searchParams={searchParams}
        searchFunction={handleSearch}
        placeholderValue={'Jogo'}
        buttonContent={'Pesquisar jogo'}
        searchWord={searchWord}
        error={error}
      />

      <section className="">
        {data &&
          data.map(game => (
            <div key={game.id}>
              <GamesAPI
                imageApi={game.background_image}
                altImage={'Game poster'}
                resultTitle={game.name}
                firstTopicTitle={'Gênero'}
                firstTopicContent={game.genres}
                firstTopicContentNotFound={'Gênero não encontrado'}
                secondTopicTitle={'Plataformas: '}
                secondTopicContent={game.platforms}
                secondTopicContentNotFound={'Plataforma não encontrado'}
                thirdTopicTitle={'Data de Lançamento: '}
                thirdTopicContent={game.released}
                thirdTopicContentNotFound={'Lançamento não encontrado'}
              />
              {/* {console.log(game.platforms[0].platform.name)} */}
              {/* {console.log(game.name)}
              {console.log(game.platforms)}
              {console.log(game.platforms[0].platform.name)} */}
              {/* <div className="card">
                <img
                  src={
                    game.background_image
                      ? background_image
                      : '../../../public/images/no-image.jpg'
                  }
                  alt="Game poster"
                  className="card_img"
                />
                <h2>{game.name}</h2>
                <li>
                  Gênero:{' '}
                  {game.genres.map(genre => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </li>
                <li>Data de Lançamento:{game.released}</li>
              </div> */}
            </div>
          ))}
      </section>
    </div>
  )
}
