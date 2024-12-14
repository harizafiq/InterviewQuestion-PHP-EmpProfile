import './App.css'
import Home from './pages/Home.jsx';
import Stafs from './pages/Stafs.jsx';
import {BrowserRouter, Routes, Route, Link, NavLink,} from 'react-router-dom';
import Create from './pages/Create.jsx';
import ReactLogo from '../src/assets/react.svg';

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li><img src={ReactLogo} alt="React Logo" /><strong>Hariz Afiq</strong></li>
            </ul>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/stafs">Stafs</NavLink></li>
              <li><NavLink to="/create">Create</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/stafs' element={<Stafs />}></Route>
            <Route path='/create' element={<Create />}></Route>
          </Routes>
        </main>
        <hr></hr>
        <footer>
          <p>This is owned by someone</p>
        </footer>
    </BrowserRouter>
    </>
  )
}

export default App
