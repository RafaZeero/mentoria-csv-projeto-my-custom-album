import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 box-border">
        <h1 className="text-4xl sm:text-5xl font-semibold ">
          Album Personalizado
        </h1>
        <p className="max-w-[290px] sm:container m-auto align-center text-center">
          No Álbum Personalizado você pode selecionar o jogo que você já jogou,
          o filme que você já assistiu e o livro que você já leu!
        </p>
        <p className="max-w-[290px] sm:container m-auto align-center text-center">
          Faça agora sua coleção, chame seus amigos e comparem suas coleções e
          não deixe nenhum item de fora.
        </p>
        <div className="flex flex-row justify-center gap-4 sm:gap-6 lg:gap-7 p-4 ">
          <Link
            to="games"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200 p-2 w-16 md:w-20"
          >
            <img src="/assets/images/game-controller.svg" alt="Controller" />
          </Link>

          <Link
            to="movies"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200 p-2 w-16 md:w-20"
          >
            <img src="/assets/images/movie-camera.svg" alt="Camera" />
          </Link>

          <Link
            to="books"
            className="border-2 border-black rounded-xl shadow-customShadow hover:scale-[1.03] duration-200 p-2 w-16 md:w-20"
          >
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
