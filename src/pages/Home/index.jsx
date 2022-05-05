import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="homepage">
        <h1>Album Personalizado</h1>
        <div className="homepage_img animation_home">
          <Link to="games">
            <img src="images/game-controller.svg" alt="Controller" />
          </Link>

          <Link to="movies">
            <img src="images/movie-camera.svg" alt="Camera" />
          </Link>

          <Link to="books">
            <img src="images/books.svg" alt="Books" />
          </Link>
        </div>
        <p>
          Criado por <span className="author">Rafael Lima de Morais</span>
        </p>
      </div>
    </>
  )
}
