import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'
import { RequireAuths } from './contexts/Auth/RequireAuths'

function App() {

  return (
    <>
      <div className='app'>
        <header>
          <h1>Header do site</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/private">Página Privada</Link>
          </nav>
        </header>
        <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/private"  element={<RequireAuths>{<Private />}</RequireAuths>} />

      </Routes>
      </div>
    </>
  )
}

export default App
