import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/games">games</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/books">books</NavLink>
    </div>
  )
}
