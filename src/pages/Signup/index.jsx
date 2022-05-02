import './signup.css'

export default function Signup() {
  return (
    <div>
      <h1>Sign up</h1>
      <form className="signup">
        <label id="nickname">Apelido</label>
        <input type="text" name="nickname" placeholder="Apelido" />
        <label id="email">Email:</label>
        <input type="email" name="email" placeholder="Usuário" />
        <label id="password">Senha</label>
        <input type="password" name="password" placeholder="Senha" />
      </form>
    </div>
  )
}
