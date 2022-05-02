import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import Home from './pages/Home'
import Games from './pages/Games'
import Books from './pages/Books'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Custom Album</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/games" element={<Games />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
