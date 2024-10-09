import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import { useState, useEffect } from 'react'
import { getAllPlayers } from './API'

export default function App () {
  const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const getPlayers = await getAllPlayers();
                setPlayers(getPlayers);
            } catch (error) {
                console.error("Whoops! There was an error fetching players.", error);
            }
        }
        fetchPlayers();
    }, []);

  return (
    <div id="container">
      <NavBar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers}/>} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/new-player-form" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </div>
  )
}