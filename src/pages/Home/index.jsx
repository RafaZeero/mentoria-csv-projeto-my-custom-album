import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 ">
        <h1 className="text-5xl font-semibold">Album Personalizado</h1>
        <div className="flex flex-col sm:flex-row ">
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
