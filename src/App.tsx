import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'
import { RequireAuths } from './contexts/Auth/RequireAuths'
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth/AuthContext'

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }

  return (
    <>
      <div className='app'>
        <header>
          <h1>Header do site</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/private">Página Privada</Link>
            {auth.user && <button onClick={handleLogout}>Sair</button>}
          </nav>
        </header>
        <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/private"  element={<RequireAuths><Private /></RequireAuths>} />

      </Routes>
      </div>
    </>
  )
}

export default App
