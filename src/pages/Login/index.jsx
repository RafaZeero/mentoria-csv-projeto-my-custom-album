import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

//styles
import './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error, loginWithGoogle, loginWithGithub } =
    useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  const handleSubmitThird = e => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <form className="login auth_form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            className="logs"
            type="email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            className="logs"
            type="password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>

        {isPending ? (
          <button className="login_buton" disabled>
            Carregando...
          </button>
        ) : (
          <button className="login_buton">Login</button>
        )}
        {error && <div className="error">{error}</div>}

        <hr />
      </form>
      <form className="login__third__party" onSubmit={handleSubmitThird}>
        {isPending ? (
          <>
            <button className="login_buton" disabled>
              Carregando...
            </button>
            <button className="login_buton" disabled>
              Carregando...
            </button>
          </>
        ) : (
          <>
            <button className="login_buton" onClick={loginWithGoogle}>
              Continuar com Google
            </button>
            <button className="login_buton" onClick={loginWithGithub}>
              Continuar com GitHub
            </button>
          </>
        )}
      </form>
    </div>
  )
}
