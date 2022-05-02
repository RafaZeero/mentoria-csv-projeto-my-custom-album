import { NavLink } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/games">games</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/books">books</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  )
}
