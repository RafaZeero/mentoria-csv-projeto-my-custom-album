import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="homepage">
        <h1>Album Personalizado</h1>
        <div className="homepage_img animation_home">
          <Link to="games">
            <img src="/assets/images/game-controller.svg" alt="Controller" />
          </Link>

          <Link to="movies">
            <img src="/assets/images/movie-camera.svg" alt="Camera" />
          </Link>

          <Link to="books">
            <img src="/assets/images/books.svg" alt="Books" />
          </Link>
        </div>
        <p>
          Criado por{' '}
          <a
            href="https://github.com/rafazeero"
            target="_blank"
            className="link__to__github"
          >
            <span className="author">Rafael Lima de Morais</span>
          </a>
        </p>
      </div>
    </>
  )
}
