import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar({ user }) {
  const { logout, isPending } = useLogout()
  return (
    <div className="navbar">
      <ul>
        <div className="user_display">
          {user ? (
            <>
              <img
                className="user_photo"
                src={user.photoURL}
                alt={`Foto de ${user.displayName}`}
              />
              <li>
                <span className="displayName">Olá, {user.displayName}</span>
              </li>
              <Link to="/dashboard">
                <button className="logout_button">
                  Configurações da Conta
                </button>
              </Link>
              <li>
                {isPending ? (
                  <button className="logout_button" disabled>
                    Saindo da conta...
                  </button>
                ) : (
                  <button className="logout_button" onClick={logout}>
                    Sair
                  </button>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Entrar</Link>
              </li>
              <li>
                <Link to="/signup">Registrar</Link>
              </li>
            </>
          )}
        </div>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/games">Jogos</Link>
        </li>
        <li>
          <Link to="/movies">Filmes</Link>
        </li>
        <li>
          <Link to="/books">Livros</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}
