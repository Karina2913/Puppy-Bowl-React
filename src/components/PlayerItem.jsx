import { useNavigate } from "react-router-dom"
import { fetchSinglePlayer } from "../API"
import { useState } from 'react'

export default function PlayerItem () {
    const [player, setPlayer] = useState([]);
    const navigate = useNavigate();

    const seeDetails = () => {
        navigate(`/${player.id}`);
    }

    const backButton = () => {
        navigate("/")
    }

    return (
        <div className="player-card">
            <div className="player-image">
                <img src={player.imageUrl} alt={player.name} />
            </div>
            <div className="player-info">
                <h4 className="player-name">{player.name}</h4>
                <p className="player-breed">{player.breed}</p>
            </div>
        </div>
    );
}