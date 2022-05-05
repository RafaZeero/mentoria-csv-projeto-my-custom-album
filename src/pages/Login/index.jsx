import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

//styles
import './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  return (
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
        <button className="btn" disabled>
          Loading...
        </button>
      ) : (
        <button className="btn">Login</button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
