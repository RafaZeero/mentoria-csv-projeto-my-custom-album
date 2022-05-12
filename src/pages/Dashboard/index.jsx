import { useAuthContext } from '../../hooks/useAuthContext'

export default function Dashboard() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="login auth_form">
      <h1>Dashboard</h1>
      <p>Nome: {user.displayName}</p>
      <p>Email: {user.email ?? user.providerData[0].email}</p>
      <p>Conta criada em: {user.metadata.creationTime}</p>
      <p>Último Login: {user.metadata.lastSignInTime}</p>
      <p>
        <img
          src={user.photoURL}
          alt={`Foto de usuário de ${user.displayName}`}
        />
      </p>
    </div>
  )
}
