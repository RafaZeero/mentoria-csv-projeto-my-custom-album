import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 p-4 box-border">
        <h1 className="text-4xl sm:text-5xl font-semibold ">
          Album Personalizado
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-16 p-4 ">
          <Link
            to="games"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200"
          >
            <img
              src="/assets/images/game-controller.svg"
              alt="Controller"
              className="p-4"
            />
          </Link>

          <Link
            to="movies"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200"
          >
            <img
              src="/assets/images/movie-camera.svg"
              alt="Camera"
              className="p-4"
            />
          </Link>

          <Link
            to="books"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200"
          >
            <img src="/assets/images/books.svg" alt="Books" className="p-4" />
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
