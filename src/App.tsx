import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'

function App() {

  return (
    <>
      <div className='app'>
        <header>
          <h1>Header do site</h1>
          <nav>
            ...
          </nav>
        </header>
        <hr />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/private"  element={<Private />} />

      </Routes>
      </div>
    </>
  )
}

export default App
