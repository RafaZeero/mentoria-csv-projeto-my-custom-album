import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)
  const { signup, isPending, error } = useSignup()

  const handleSubmit = e => {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  const handleFileChange = e => {
    setThumbnail(null)
    let fileSelected = e.target.files[0]

    if (!fileSelected) {
      setThumbnailError('Por favor escolha um arquivo')
      return
    }
    if (!fileSelected.type.includes('image')) {
      setThumbnailError('Arquivo deve ser uma imagem')
      return
    }
    if (fileSelected.size >= 300000) {
      setThumbnailError('Imagem deve ser menor que 300Kb')
      return
    }

    setThumbnailError(null) //limpando erros
    setThumbnail(fileSelected)
  }

  return (
    <form className="signup auth_form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
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
        <span>Senha:</span>
        <input
          className="logs"
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Apelido:</span>
        <input
          className="logs"
          type="text"
          required
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Foto de perfil:</span>
        <input
          type="file"
          required
          onChange={handleFileChange}
          // onChange={e => setThumbnail(e.target.value)}// não funciona da mesma forma
          // value={thumbnail}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>

      {isPending ? (
        <button className="btn" disabled>
          Carregando...
        </button>
      ) : (
        <button className="btn">Registrar</button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  )
}
