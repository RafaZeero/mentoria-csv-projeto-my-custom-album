import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages
import Movies from './pages/Movies'
import Home from './pages/Home'
import Games from './pages/Games'
import Books from './pages/Books'
import Login from './pages/Login'
import Signup from './pages/Signup'

//styles
import './App.css'

//components
import Navbar from './components/Navbar'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="games" element={<Games />} />
            <Route path="books" element={<Books />} />
            <Route
              path="login"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="signup"
              element={user ? <Navigate replace to="/" /> : <Signup />}
            />
            <Route
              path="*"
              element={user ? <Navigate replace to="/" /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
