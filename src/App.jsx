import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'

export default function App () {
  return (
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers/>} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </div>
    </div>
  )
}