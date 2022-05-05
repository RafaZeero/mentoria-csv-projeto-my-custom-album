import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to="games">
        <img src="./images/game-controller.svg" alt="Controller" />
      </Link>

      <Link to="movies">
        <img src="./images/movie-camera.svg" alt="Camera" />
      </Link>

      <Link to="books">
        <img src="./images/books.svg" alt="Books" />
      </Link>
    </div>
  )
}
