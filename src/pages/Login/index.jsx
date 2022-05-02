//styles
import './login.css'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="login">
        <label id="email">Email:</label>
        <input type="email" name="email" placeholder="email" />
        <label id="password">Senha</label>
        <input type="password" name="password" placeholder="usuário" />
      </form>
    </div>
  )
}
